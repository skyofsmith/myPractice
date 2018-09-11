var Person = /** @class */ (function () {
    function Person(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log('Hello', this.first_name);
    };
    Person.prototype.ageInYears = function (years) {
        return this.age + years;
    };
    return Person;
}());
var p;
p = new Person('sam', 'smith', 6);
p.first_name = 'sam';
p.greet();
p.age = 6;
p.ageInYears(12);
