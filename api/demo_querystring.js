const querystring = require('querystring');

const str1 = querystring.stringify({
    name: 'hayate',
    course: ['js', 'java', 'python']
});
console.log(str1);// name=hayate&course=js&course=java&course=pyhton


// 第二个参数为分隔符，默认'&'
const str2 = querystring.stringify({
    name: 'hayate',
    course: ['js', 'java', 'python']
}, ',');
console.log(str2);// name=hayate,course=js,course=java,course=python


// 第三个参数为赋值，默认'='
const str3 = querystring.stringify({
    name: 'hayate',
    course: ['js', 'java', 'python']
}, ',', ':');
console.log(str3);// name:hayate,course:js,course:java,course:python

const obj1 = querystring.parse('name=hayate&course=js&course=java&course=python');
console.log(obj1);//{ name: 'hayate', course: [ 'js', 'java', 'pyhton' ] }

const obj2 = querystring.parse('name=hayate,course=js,course=java,course=python', ',');
console.log(obj2);//{ name: 'hayate', course: [ 'js', 'java', 'pyhton' ] }

const obj3 = querystring.parse('name:hayate,course:js,course:java,course:python', ',', ':');
console.log(obj3);//{ name: 'hayate', course: [ 'js', 'java', 'pyhton' ] }

// 第四个参数为可选参数，maxKeys（最多能解析多少个键值对，0代表无限制）和decodeURIComponent（用于解码非utf-8编码字符串，默认为querystring.unescape）
const obj4 = querystring.parse('name=hayate&course=js&course=java&course=python', null, null,{maxKeys: 0});
console.log(obj4);//{ name: 'hayate', course: [ 'js', 'java', 'pyhton' ] }

// 编码
var str4 = querystring.escape('<你好, 师姐!>');
console.log(str4);

// 解码
var str5 = querystring.unescape('%3C%E4%BD%A0%E5%A5%BD%2C%20%E5%B8%88%E5%A7%90!%3E');
console.log(str5);
