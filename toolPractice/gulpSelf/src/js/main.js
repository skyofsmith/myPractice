function Person(name, age, telNum) {
    this.name = name;
    this.age = age;
    this.telNum = telNum;
}

var call = function (person, msg) {
    alert('tel:' + person.telNum + ', say: ' + msg);
};

var p1 = new Person('zz', 27, 1231231223);
call(p1, 'hello,');