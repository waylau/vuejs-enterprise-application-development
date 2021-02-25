var s; // 显式指定类型 
var empty = ""; // 等同于 empty: string = ""  
var abc = 'abc'; // 等同于 abc: string = "abc"  
var c = abc.charAt(2); // 使用了 String 接口属性
console.log('s type is:' + typeof s);
console.log('empty type is:' + typeof empty);
console.log('abc type is:' + typeof abc);
console.log('c type is:' + typeof c);
s = 'false'; // 赋值
console.log('s type is:' + typeof s);
