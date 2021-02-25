var b: boolean;         // 显式指定类型
var yes = true;         // 等同于 yes: boolean = true
var no = false;         // 等同于 no: boolean = false

console.log('b type is:' + typeof b); //b type is:undefined
console.log('yes type is:' + typeof yes); //yes type is:boolean
console.log('no type is:' + typeof no); //no type is:boolean

b = false;             // 赋值
console.log('b type is:' + typeof b); //b type is:boolean


