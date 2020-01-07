void main() {
  var p = new Person("sam", 28, "Male");
  new Person.withName("Dr");
  new Person.withAge(20);
}

class Person{
  String name;
  int age;
  String gender;

  /*Person(String name, int age) {
    this.name = name;
    this.age = age;
  }*/
  Person(this.name, this.age, this.gender);

  Person.withName(String name) {
    this.name = name;
  }

  Person.withAge(this.age)

  void work () {
    print("Work...");
  }

}