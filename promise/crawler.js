/*
准备：sudo npm install cheerio
 */
/*爬虫得到的文本格式如下
<div class="chapter course-wrap ">
    <!-- 章节标题 -->
    <h3>4章 模块与包管理工具</h3>
    <div class="chapter-description">
        学习 Nodejs 模块及管理工具。
    </div>
    <!-- 章节标题 end -->
    <!-- 章节小节 -->
    <ul class="video">
        <li data-media-id="6697">
            <a href='/video/6697' class="J-media-item">
                <i class="imv2-play_circle type"></i>
                4-1 Node.js 的模块 与 Commonjs 规范 (03:44)
                <button class="r moco-btn moco-btn-red preview-btn">开始学习</button>
            </a>
        </li>
        <li data-media-id="6700">
            <a href='/video/6700' class="J-media-item">
                <i class="imv2-play_circle type"></i>
                4-2 模块的分类 (00:45)
                <button class="r moco-btn moco-btn-red preview-btn">开始学习</button>
            </a>
        </li>
        <li data-media-id="6701">
            <a href='/video/6701' class="J-media-item">
                <i class="imv2-play_circle type"></i>
                4-3 简单的Nodejs模块 (09:23)
                <button class="r moco-btn moco-btn-red preview-btn">开始学习</button>
            </a>
        </li>
    </ul>
    <!-- 章节小节 end -->
</div>
*/
const cheerio = require('cheerio');
const Promise = require('bluebird');
const http = require('http');
const baseUrl = 'http://www.imooc.com/learn/';
const url = 'http://www.imooc.com/learn/348';
const videoIds = [348, 259, 197, 134, 75]

function filterChapters(html) {
    var $ = cheerio.load(html);
    var chaptersArray = $('.chapter');// class属性
    var title = $('.hd').children('h2').text();
    var number =$('.js-learn-num').text();
    /* 期待的数据结构
    courseData = {
        title: title,
        number: number,
        chapters: [{
            title: '',
            description: '',
            videos: [{
                title: '',
                id: '',
                url: ''
            }]
        }]
    }*/
    var courseData = {
        title: title,
        number: number,
        chapters:[]
    };
    chaptersArray.each(function (index,item) {
        var chapter = $(this);
        var description = chapter.find('.chapter-description').text().trim();
        var chapterTitle = chapter.find('h3').text().trim();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            title: chapterTitle,
            description: description,
            videos: [],
        }

        videos.each(function(index,item) {
            //console.log(item)
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text().trim();
            var id = video.attr('href').split('/video/')[1];// 根据href获取到id
            var url = 'https://www.imooc.com' + video.attr('href');
            chapterData.videos.push({
                title: videoTitle,
                id: id,
                url: url
            });
        });
        courseData.chapters.push(chapterData);
    })
    return courseData;
}

function printCourseInfo(coursesData) {

    /*coursesData.forEach((courseData)=> {
        console.log(courseData.title + '\n');
    })*/
    coursesData.forEach((courseData) => {
        console.log(courseData.title + '\n');
        courseData.chapters.forEach((chapter)=>{
            console.log('\t'+chapter.title + '[' + chapter.description + ']');
            chapter.videos.forEach((video)=>{
                console.log('\t\t【' + video.id + '】' + video.title.replace('\n', ' ').replace('                                                                              ',' ') + '[' + video.url + ']' + '\n');
            })
        })
    });
}

function getPageAsync(url) {
    return new Promise((resolve, reject)=>{
        console.log('正在爬取' + url);

        http.get(url, function (res) {
            var html = '';
            res.on('data', (data) => {
                html += data;
            });
            res.on('end', () => {
                resolve(html); // 把html传回去
                //var courseData = filterChapters(html);
                //printCourseInfo(courseData);
            })

        }).on('error', (e) => {
            reject(e)
            console.log('获取课程数据出错！');
        })
    })
}

// 目标链接数组
var fetchCourseArray = [];

videoIds.forEach((id)=> {
    fetchCourseArray.push(getPageAsync(baseUrl + id));

})

Promise
    .all(fetchCourseArray)
    .then((pages)=>{
        var coursesData =[];
        pages.forEach((html)=>{
            var course = filterChapters(html)
            coursesData.push(course);
        })
        /*coursesData.sort((a, b)=>{
            return a.number < b.number;
        })*/
        printCourseInfo(coursesData)
    });

