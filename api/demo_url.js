var url = require('url')
console.log(url)

var url0 = url.parse('https://www.baidu.com:80/news?id=1&&page=1#floor')
//console.log(url0)

// true:把参数转换成json对象
var url1 = url.parse('https://www.baidu.com:80/news?id=1&&page=1#floor',true)
//console.log(url1)
//console.log(url1.query.page)
// 未知协议时，第三个参数true，识别host
var url2 = url.parse('//www.baidu.com:80/news?id=1&&page=1#floor',true, true)
//console.log(url2)

/*console.log(url.format({
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com:80',
    port: '80',
    hostname: 'www.baidu.com',
    hash: '#floor',
    search: '?id=1&&page=1',
    query: 'id=1&&page=1',
    pathname: '/news',
    path: '/news?id=1&&page=1',
    href: 'https://www.baidu.com:80/news?id=1&&page=1#floor'
}))*/
//console.log(url.resolve('https://www.baidu.com:80/','/news/','id=1'))