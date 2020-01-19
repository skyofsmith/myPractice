void main() {

}

abstract class Engine {
  void work();
}

class OilEngine implements Engine {
  void work() {
    print("work with oil");
  }
}

class ElectricEngine implements Engine {
  void work() {
    print("work with electric");
  }
}

class Tyre {
  String name;
  void run() {}
}

class Car = Tyre with ElectricEngine;

class Bus = Tyre with OilEngine;