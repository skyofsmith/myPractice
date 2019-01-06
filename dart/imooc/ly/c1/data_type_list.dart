void main(List<String> args) {
  var list1 = [1, 2, 3, 'dart', true];
  print(list1);
  print(list1[3]);
  list1[3] = 'hello ' + list1[3];
  print(list1[3]);
  
  var list2 = const [4,1,2,3];
  print(list2);
  // list2[1] = 5;
  var list3 = new List();
  print(list3.length);
  list3.add(1);
  list3.insert(0, 0);
  list3.add(2);
  list3.remove(1);
  print(list3);
  list3.clear();
  print(list3);
  print(list2.indexOf(2));
  print(list2.lastIndexOf(2));
  var list4 = [2,1,3];
  list4.sort();
  print(list4);
  print(list4.sublist(1));
  list1.forEach(print);
  list1.
}