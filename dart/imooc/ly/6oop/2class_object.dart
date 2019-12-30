import 'person.dart';

void main() {
  var p1 = new Person();
  var p2 = Person();
  p1.name = "Sam";
  p1.age = 29;
  print(p1.name);
  p1.work();
}
