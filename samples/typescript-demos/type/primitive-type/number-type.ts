var x: number;          // 显式指定类型
var y = 0;              // 等同于 y: number = 0  
var z = 123.456;        // 等同于 z: number = 123.456  
var s = z.toFixed(2);   // 使用了Number接口的属性

console.log('x type is:' + typeof x); // x type is:undefined
console.log('y type is:' + typeof y); // y type is:number
console.log('z type is:' + typeof z);
console.log('s type is:' + typeof s);

var x = 1;              // 赋值
console.log('x type is:' + typeof x);