void main() {
  var person = new Person("Tom", 20, "Male");
  print(person);
}

class Person{
  String name;
  int age;

  final String gender;

  Person(this.name, this.age, this.gender);

  Person.withMap(Map map) : name = map["name"], gender = map["gender"] {
    this.age = map["age"];
  }

  void work() {
    print("Work...");
  }
}