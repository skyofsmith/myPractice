void main() {
  var d = new D();
  d.a();
  d.b();
  d.c();
}

class A {
  void a() {
    print("A.a()...");
  }
}

class B {
  void b() {
    print("B.b()...");
  }
}

class C {
  void c() {
    print("C.c()...");
  }
}

class D extends A with B, C{}