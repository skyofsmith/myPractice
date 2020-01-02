void main() {
  var p = new Person("sam", 28, "Male");
  var p1 = Person.withName("Dr");
}

class Person{
  String name;
  int age;
  final String gender;

  /*Person(String name, int age) {
    this.name = name;
    this.age = age;
  }*/
  Person(this.name, this.age, this.gender){
    print(name);
  }
  Person.withName(name) {
    this.name = name;
  }
  Person.withAge(age) {
    this.age = age;
  }

  void work() {
    print("Work...");
  }
}