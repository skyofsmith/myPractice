void main(List<String> args) {
  var map1 = {
    'first': 'dart',
    'second': 'js'
  };
  print(map1);
  print(map1['first']);
  map1['hello'] = 'nodejs';
  print(map1);

  var map2 = const {1: 'dart', 2: 'nodejs'};
  // map2[3] = 'js';
  print(map2);
  var map3 = new Map();
  map3[1] = 1;
  print(map3.length);
  print(map3.isEmpty);
  print(map3.isNotEmpty);
  print(map1.keys);
  print(map1.values);

  print(map1.containsKey('second'));
  print(map1.containsValue('second'));
  map1.remove('hello');
  map1.forEach(f);
  var list1 = ['a', 'b', 'c'];
  print(list1.asMap());
}

void f (k, v) {
  print('key=$k,value=$v');
}