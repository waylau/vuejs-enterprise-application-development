namespace M {  
    export interface P { x: number; y: number; }  
    export var a = 1;  
}

var p: M.P;             // M 作为 NamespaceName  
var m = M;              // M 作为 PrimaryExpression  
var x1 = M.a;           // M 作为 PrimaryExpression  
var x2 = m.a;           // 等同于 M.a  
var q: m.P;             // 错误！