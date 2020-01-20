void main() {
  var p1 = new Person(20);
  var p2 = new Person(20);

  print(p1 > p2);
  p1.age;
  print(p1['age']);
  print(p1 == p2);
}

class Person {
  int age;

  Person(this.age);

  bool operator >(Person p) {
    return this.age > p.age;
  }

  int operator [](String str) {
    if ("age" == str) {
      return age;
    }

    return 0;
  }

  @override
  bool operator ==(Object other) {
    identical(this, other) ||
        other is Person && runtimeType == other.runtimeType && age == other.age;
  }

  @override
  int get hashCode => super.hashCode;
}
