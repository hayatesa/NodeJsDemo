const EventEmitter = require('events').EventEmitter;

const life = new EventEmitter();

const myEvent1 = (who) => {
    console.log(who + '1');
}
// 设置同一个事件最大事件监听数
life.setMaxListeners(11);
// addEventListener
life.on('myEvent', myEvent1)
life.on('myEvent', (who) => {
    console.log(who + '2');
})
life.on('myEvent', (who) => {
    console.log(who + '3');
})
life.on('myEvent', (who) => {
    console.log(who + '4');
})
life.on('myEvent', (who) => {
    console.log(who + '5');
})
life.on('myEvent', (who) => {
    console.log(who + '6');
})
life.on('myEvent', (who) => {
    console.log(who + '7');
})
life.on('myEvent', (who) => {
    console.log(who + '8');
})
life.on('myEvent', (who) => {
    console.log(who + '9');
})
life.on('myEvent', (who) => {
    console.log(who + '10');
})
life.on('myEvent', (who) => {
    console.log(who + '11');
})
life.on('yourEvent', (who) => {
    console.log(who + 'a');
})
// 移除监听
life.removeListener('myEvent', myEvent1);
// 返回值为布尔型，表示事件是否被监听
var hasConfortListener = life.emit('myEvent', '溶酶菌');// true
var hasYourListener = life.emit('yourEvent', '溶酶菌');// true
var hasNoListener = life.emit('noEvent', '溶酶菌');// false

console.log(hasConfortListener);
console.log(hasYourListener);
console.log(hasNoListener);
// 获取数量
console.log(life.listeners('myEvent').length);
console.log(EventEmitter.listenerCount(life, 'myEvent'));

// 移除指定的所有监听事件
life.removeAllListeners('myEvent');
console.log(EventEmitter.listenerCount(life, 'myEvent'));
console.log(EventEmitter.listenerCount(life, 'yourEvent'));

// 移除所有监听事件
life.removeAllListeners();
console.log(EventEmitter.listenerCount(life, 'myEvent'));
console.log(EventEmitter.listenerCount(life, 'yourEvent'));
