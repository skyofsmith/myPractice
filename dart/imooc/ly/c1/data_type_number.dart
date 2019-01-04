void main() {
  num a = 10;
  print(a);
  a = 11.1;
  print(a);
  int b = 30;
  // b = 11.1;
  double c = 11.1;
  c = 1;
  print(a + b);
  print(a - b);
  print(a * b);
  print(a / b);
  print(a ~/ b);
  print(a % b);
  print(0.0 / 0.0);
  
  print(b.isEven);
  print(b.isOdd);
  int d = 11;
  print(d.isEven);
  print(d.isOdd);
  
  int e = -100;
  print(e.abs());

  double f = 23.5;
  print(f.round());
  print(f.floor());
  print(f.ceil());

  print(f.toInt());
  print(d.toDouble());
}