void main() {
  var l1 = Logger('sam');
  var l2 = Logger('sam');
  print(l1 == l2);
}

class Logger {
  final String name;

  static final Map<String, Logger> _cache = <String, Logger> {};

  factory Logger(String name) {
    if(_cache.containsKey(name)) {
      return _cache[name];
    } else {
      final logger = Logger._internal(name);
      _cache[name] = logger;
      return logger;
    }
  }

  Logger._internal(this.name);

  void log(String msg) {
    print(msg);
  }
}