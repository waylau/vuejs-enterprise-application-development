var ab = { a: 1, b: 1 };
var a = ab; // A 可归属于 A & B   
var b = ab; // B 可归属于 A & B
var xy = { p: ab }; // X & Y 有一个 A & B 类型的属性
var f = function (a, b) { };
f("hello", "world"); // 正确
f(1, 2); // 正确
f(1, "test"); // 错误！
