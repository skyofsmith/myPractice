
void main() {
  var func = (){
    print("Hello");
  };
  func();
  (){
    print("Hello");
  }();
}