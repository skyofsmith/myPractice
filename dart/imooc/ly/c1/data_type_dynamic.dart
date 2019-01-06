void main(List<String> args) {
  var a;
  a = 100;
  a = 'a';
  dynamic b = 20;
  b = 'b';
  print(a == b);

  var list = new List<dynamic>();
  list.add(1);
  list.add(true);
}