// Declare a tuple type
var x: [string, number];
// 初始化
x = ['hello', 10]; // OK
// 错误的初始化
x = [10, 'hello']; // Error

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number'没有'substr'方法

x[3] = 'world'; // OK
console.log(x[5].toString()); // OK, 'string'和'number'都有toString
x[6] = true; // Error, boolean不是number或string