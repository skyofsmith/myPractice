void main() {
  var currentSeason = Season.winter;

  switch(currentSeason) {
    case Season.spring:
      print("1~3");
      break;
    case Season.summer:
      print("4~6");
      break;
    case Season.autumn:
      print("7~9");
      break;
    case Season.winter:
      print("10~12");
      break;
  }
}

enum Season {
  spring,
  summer,
  autumn,
  winter
}