void main() {
  var s = new Student();
}

class Person{
  String name;

  Person() {
    print("Person...");
  }
}

class Student extends Person {
  int age;
}