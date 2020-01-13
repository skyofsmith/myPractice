void main() {
  var s = new Student("Sam");
  print(s.name);
}

class Person {
  String name;

  Person(this.name);

  Person.withName(this.name);
}

class Student extends Person {
  int age;

  Student(String name) :super.withName(name);
}