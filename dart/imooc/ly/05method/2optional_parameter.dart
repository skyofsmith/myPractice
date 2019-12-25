

void main() {
  printPerson("sam");
  printPerson("Drzz", age: 28, gender: "Male");
  printPerson("Drzz", gender: "Male");

  printPerson2("sam");
  printPerson2("Drzz", 18);
  printPerson2("Drzz", 18, "Male");
//  printPerson2("Drzz", "Male");
}

printPerson(String name, {int age, String gender}) {
  print("name=$name,age=$age,gender=$gender");
}
printPerson2(String name, [int age, String gender]) {
  print("name=$name,age=$age,gender=$gender");
}