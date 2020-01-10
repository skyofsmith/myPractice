void main() {
  var person = new Person();
  person.name = "Tom";
  person.age = 20;
//
//  person.work();
//  person();
  print(person("Sam", 28));
}

class Person {
  String name;
  int age;

  String work() {
    return ("Name is $name, Age is $age");
  }

  String call(String name, int age) {
    return ("Name is $name, Age is $age");
  }
}