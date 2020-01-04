void main() {
  const p = const Person("sam", 28, "Male");
//  p = Person();
  print(p);
}

class Person{
  final String name;
  final int age;
  final String gender;

  const Person(this.name, this.age, this.gender);

  void work() {
    print("Work...");
  }
}