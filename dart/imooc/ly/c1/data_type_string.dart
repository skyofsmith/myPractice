void main(List<String> args) {
  String str1 = 'Hello';
  String str2 = '''
Hello
Dart
!!!
''';
  print(str2);

  String str3 = r'Hello \n Dart \n !!!';
  print(str3);
  print(str3 + '___');
  print('asd_' * 4);
  print(str1 == str2);
  print(str3[3]);

  print('str1 is $str1, length is${str1.length}. 3 + 4 = ${ 3 + 4 }');
  print(str2.isEmpty);

  print(str1.contains('lo'));
  print(str1.substring(1, 3));

  print(str3.startsWith('h'));
  print(str3.endsWith('!'));

  print('asd'.indexOf('s'));
  print('asdas'.lastIndexOf('a'));

  print('a'.toUpperCase());
  print('A'.toLowerCase());
  print(' asd '.trim());
  print(' asd '.trimLeft());
  print(' asd '.trimRight());
  print('a b c d e f'.split(' '));
  print('a b c,d'.replaceAll(' ', ';'));
}