void main() {
  var person;
  person = "";
  person = new Person();
  person
    ..name = "Sam"
    ..age = 20
    ..work();
  (person as Person).work();

  if (person is Person) {
    person.work();
  } else if (person is! Person) {
    print("not a Person");
  }
}

class Person {
  String name;
  int age;

  void work() {
    print("Work...");
  }
}