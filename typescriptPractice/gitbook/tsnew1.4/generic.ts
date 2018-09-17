function equal<T>(lhs: T, rhs: T): boolean {
    return lhs === rhs;
  }
  
  // 之前没有错误
  // 现在会报错：在string和number之前没有最佳的基本类型
  var e = equal(42, 'hello');