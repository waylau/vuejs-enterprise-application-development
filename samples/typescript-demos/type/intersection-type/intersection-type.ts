interface A { a: number }  
interface B { b: number }

var ab: A & B = { a: 1, b: 1 };  
var a: A = ab;  // A 可归属于 A & B   
var b: B = ab;  // B 可归属于 A & B

interface X { p: A }  
interface Y { p: B }

var xy: X & Y = { p: ab };  // X & Y 有一个 A & B 类型的属性

type F1 = (a: string, b: string) => void;  
type F2 = (a: number, b: number) => void;

var f: F1 & F2 = (a: string | number, b: string | number) => { };  
f("hello", "world");  // 正确
f(1, 2);              // 正确
f(1, "test");         // 错误！