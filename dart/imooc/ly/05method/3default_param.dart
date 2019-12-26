
void main() {

  printPerson("sam");
  printPerson("sam", age: 20);
  printPerson("sam", gender: "Male");
}

printPerson(String name, {int age = 30, String gender = "Female"}) {
  print("name=$name,age=$age,gender=$gender");
}