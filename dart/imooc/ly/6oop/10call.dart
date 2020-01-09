void main() {
  var person = new Person();
  person.name = "Tom";
  person.age = 20;

  person.work();
}

class Person {
  String name;
  int age;

  void work() {
    print("Name is $name, Age is $age");
  }
}