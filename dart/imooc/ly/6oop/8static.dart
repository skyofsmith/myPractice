void main() {
  var page = new Page();
  Page.scrollDown();

}
class Page {
  static int currentPage = 1;

  static void scrollDown() {
    currentPage = 1;
    print("scrollDown...");
  }

  void scrollUp() {
    currentPage++;
    print("scrollUp...");
  }
}