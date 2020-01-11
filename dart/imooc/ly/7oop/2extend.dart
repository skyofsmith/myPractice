import 'person.dart';

void main() {
  var student = new Student();
  student.study();
  student.name = "Sam";
  student.age = 28;
//  student._birthday = '';
  student.isAdult;
  student.run();

  Person p = new Student();
  if (p is Student) {
    p.study();
  }
}

class Student extends Person {
  void study() {
    print("Student study...");
  }

  void run() {
    super.run();
    print("student run");
  }
}