var klass = require('./klass')

var add = function (klasses) {
    klasses.forEach((item, index) => {
        var _Klass = item;
        var teacherName = item.teacherName;
        var students = item.students;
        klass.add(teacherName, students)
    })
};
exports.add = add;