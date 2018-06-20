const http = require('http');

const url = 'http://www.imooc.com/learn/348';

http.get(url, function (res) {
    var html = '';
    res.on('data', (data) => {
        html += data;
    });

    res.on('end', () => {
        console.log(html);
    })
}).on('error', () => {
    console.log('获取课程数据出错！');
})