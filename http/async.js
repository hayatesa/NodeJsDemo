/*var i = 0;
while (true) {
    i++;
    console.log(1)
}*/

/*
var c = 0;
function printIt(c) {
    console.log(c);
}
function plus() {
    // 模拟延迟
    setTimeout(()=>{
        c += 1;
    }, 1000)
}
plus(); // 延迟1S
printIt(); // 输出0
*/

var c = 0;
function printIt(c) {
    console.log(c);
}
function plus(callback) {
    setTimeout(()=>{
        c += 1;
        callback(c);
    }, 1000)
}
plus(printIt); // 输出1