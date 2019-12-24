/**
 *
 */
void main(List args) {
  print(args);

  print(getPerson("sam", 28));
  printPerson("sam", 28);
}

getPerson(name, age) => "name=$name,age=$age";

printPerson(name, age) {
  print("name=$name,age=$age");
}