void main() {
  var s = new Student("Sam", "Male");
  print(s.name);
}

class Person {
  String name;

  Person(this.name);

  Person.withName(this.name);
}

class Student extends Person {
  int age;
  final String gender;

  Student(String name, String g) : gender = g, super.withName(name);
}