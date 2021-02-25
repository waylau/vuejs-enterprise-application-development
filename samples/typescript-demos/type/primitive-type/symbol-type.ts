
var secretKey = Symbol();  
var obj = {};  
obj[secretKey] = "secret message";  // 使用 symbol 作为属性键
obj[Symbol.toStringTag] = "test";   // 使用 symbol 属性
