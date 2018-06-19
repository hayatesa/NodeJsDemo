var pet = {
    words: '...',
    speak: function (... says) {
        console.log(this)
        console.log(says + ' ' + this.words);
    }
}

pet.speak('Speak')

var dog = {
    words: 'Wang'
}
// 把speak函数的this指向dog
//pet.speak.call(dog, 'Speak');
// apply的参数必须是一个数组
//pet.speak.apply(dog, ['Speak']);
// bind方法返回的是一个function，参数为静态参数
var newSpeak = pet.speak.bind(dog, 's1');
// 调用时的参数为动态参数，在参数列表中位于静态参数后
newSpeak('s2');
console.log(newSpeak)

