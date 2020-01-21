void main () {
  var list = new List<int>();
  list.add(1);
  list.add(2);

  var utils = new Utils<String>();
  utils.put("E");
}

class Utils<T>{
  T element;

  void put(T e) {
    this.element = e;
  }
}
/*
class Utils{
  int element;
  String elementStr;

  void putInt(int element) {
    this.element = element;
  }
  void putString(String element) {
    this.elementStr = element;
  }
}*/
