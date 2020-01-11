class Person {
  String name;
  int age;
  String _birthday;

  bool get isAdult => age > 18;

  void run() {
    print("Name is $name, Age is $age, He is working...");
  }
}