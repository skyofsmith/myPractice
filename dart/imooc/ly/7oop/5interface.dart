void main() {
  var s = new Student();
  s.run();
}
abstract class Person {

  void run();
}

class Student implements Person {

  void run() {
    print("Student run..");
  }
}