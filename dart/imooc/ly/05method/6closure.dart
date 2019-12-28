
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

  return() {
    print(count++);
  };
}