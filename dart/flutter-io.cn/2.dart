class Bicycle {
  Bicycle(this.cadence, this.speed, this.gear);

  Bicycle(int cadence, int speed, int gear) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
  };

  int cadence;
  int speed;
  int gear;
}

main() {
  var bike = new Bicycle(2, 0, 1);
  print(bike);
}