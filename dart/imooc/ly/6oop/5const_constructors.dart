void main() {
  const p = const Person("sam", 28, "Male");
//  p = Person();
}

class Person{
  final String name;
  final int age;
  final String gender;

  const Person(this.name, this.age, this.gender){
    print(name);
  }

  void work() {
    print("Work...");
  }
}