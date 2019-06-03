void main(List<String> args) {
  var a;
  print(a);
  // a is null

  a = 10;
  print(a);
  // 10

  a = 'Hello Dart!';
  print(a);
  // Hello Dart!

  var b = 20;
  print(b);
  // 20

  final c = 30;
  // a final variable, can only be set once
  print(c);
  // 30
  // c = 1;

  const d = 11;
  // Constant variables can't be assigned a value
  print(d);
  // d = 22;
  // 11
}

