var M;
(function (M) {
    M.a = 1;
})(M || (M = {}));
var p; // M 作为 NamespaceName  
var m = M; // M 作为 PrimaryExpression  
var x1 = M.a; // M 作为 PrimaryExpression  
var x2 = m.a; // 等同于 M.a  
var q; // 错误！
