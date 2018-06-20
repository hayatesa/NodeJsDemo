/*
API:
    构造器
    write()
    toString()
    copy()
    slice()
    compare()
    equals()
    fill()
 */

// 默认编码：utf8
var buf1 = new Buffer('Hello 溶酶菌');
console.log(buf1);// <Buffer 48 65 6c 6c 6f 20 e6 ba b6 e9 85 b6 e8 8f 8c>

var buf2 = new Buffer('Hello 溶酶菌', 'base64');
console.log(buf2);// <Buffer 1d e9 65 a2>

// 指定长度
var buf3 = new Buffer(8);
console.log(buf3.length); // 8
buf3.write('12345678');
console.log(buf3); // <Buffer 31 32 33 34 35 36 37 38>

// 超出的部分被丢弃
var buf4 = new Buffer(7);
buf4.write('12345678');
console.log(buf4); // <Buffer 31 32 33 34 35 36 37>

// 使用数组实例化，小数部分被丢弃
var buf5 = new Buffer([1, 2, 3, 4]);
console.log(buf5); // <Buffer 01 02 03 04>
console.log(buf5[3]); // 4

var buf6 = new Buffer('溶酶菌');
var str6 = buf6.toString('base64');
console.log(str6); // 5rq26YW26I+M

var buf7 = new Buffer('5rq26YW26I+M', 'base64');
var str7 = buf7.toString('utf8');
console.log(str7); // 溶酶菌

var buf8 = new Buffer('5rq26YW26I+M', 'base64');
var str8 = buf7.toString('hex');
console.log(str8); // e6bab6e985b6e88f8c

var buf9 = new Buffer('e6bab6e985b6e88f8c', 'hex');
var str9 = buf9.toString();
console.log(str9); // 溶酶菌