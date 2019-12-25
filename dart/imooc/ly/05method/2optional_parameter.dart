

void main() {
  printPerson("sam");
}

printPerson(String name, {int age, String gender}) {
  print("name=$name,age=$age,gender=$gender");
}