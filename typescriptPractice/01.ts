class Person {
  first_name: string;
  last_name: string;
  age: number;
  constructor(first_name: string, last_name: string, age: number) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }

  greet() {
    console.log('Hello', this.first_name);
  }

  ageInYears(years: number): number {
    return this.age + years;
  }
}

var p: Person;
p = new Person('sam', 'smith', 6);
p.first_name = 'sam';
p.greet();

p.age = 6;
p.ageInYears(12);
