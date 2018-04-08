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

class Report {

  data: Array<string>;

  constructor(data: Array<string>) {
    this.data = data;
  }

  run() {
    this.data.forEach(function(line) { console.log(line); });
  }

}

var r: Report = new Report(['First line', 'Second line']);
r.run();

class TabbedReport extends Report {
  headers: Array<string>;

  constructor(headers: string[], values: string[]) {
    super(values)
    this.headers = headers;
  }

  run() {
    console.log(this.headers);
    super.run();
  }
}

var headers: string[] = ['Name'];
var data: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
var h: TabbedReport = new TabbedReport(headers, data)
h.run();
