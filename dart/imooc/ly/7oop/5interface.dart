void main() {
  var p = new Person();
  p.run();
  var s = new Student();
  s.run();
}
class Person {
  String name;
  int get age => 18;

  void run() {
    print("Person run..");
  }
}

class Student implements Person {
  String name;

  int get age => null;

  void run() {
    print("Student run..");
  }
}