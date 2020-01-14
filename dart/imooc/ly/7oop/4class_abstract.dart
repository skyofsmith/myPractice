void main() {
  var p = new Student();
  p.run();
}

abstract class Person {
  void run();
}

class Student extends Person {
  void run() {
    print("run...");
  }
}