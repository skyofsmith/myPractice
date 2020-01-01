void main() {
  var p = new Person("sam", 28, "Male");
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

  void work() {
    print("Work...");
  }
}