
void main() {
  var func = a();
  func();
  func();
  func();
  func();
  func();
}

a() {
  var count = 0;

  printCount() {
    print(count++);
  }
  return printCount;
}