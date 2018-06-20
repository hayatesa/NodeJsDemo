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
const http = require('http');
const url = 'http://www.imooc.com/learn/348';

function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');// class属性
    //console.log($)
    //console.log(chapters)
    /* 期待的数据结构
    [{
        chapterTitle: '',
        description: '',
        videos: [{
            title: '',
            id: '',
            url: ''
        }]
    }]*/
    var courseData = [];
    chapters.each(function (index,item) {
        var chapter = $(this);
        var description = chapter.find('.chapter-description').text().trim();
        var chapterTitle = chapter.find('h3').text().trim();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle: chapterTitle,
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

        courseData.push(chapterData);
    })
    return courseData;
}

function printCourseInfo(courseData) {
    courseData.forEach((item) => {
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle+'\n');

        item.videos.forEach((video) => {
            console.log('\t【' + video.id + '】' + video.title.replace('\n', ' ').replace('                                                                              ',' ') + '[' + video.url + ']' + '\n');
        })
    });
}

http.get(url, function (res) {
    var html = '';
    res.on('data', (data) => {
        html += data;
    });
    res.on('end', () => {
        var courseData = filterChapters(html);
        printCourseInfo(courseData);
    })

}).on('error', () => {
    console.log('获取课程数据出错！');
})