var s: string;             // 显式指定类型 
var empty = "";          // 等同于 empty: string = "" 
var abc = 'abc';           // 等同于 abc: string = "abc" 
var c = abc.charAt(2); // 使用了 String 接口属性

console.log('s type is:' + typeof s); //s type is:undefined
console.log('empty type is:' + typeof empty); //empty type is:string
console.log('abc type is:' + typeof abc); //abc type is:string
console.log('c type is:' + typeof c); //c type is:string

s = 'false'; // 赋值
console.log('s type is:' + typeof s); //s type is:string

