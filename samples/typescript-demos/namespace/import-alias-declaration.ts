namespace A {  
    export interface X { s: string }  
    export var X: X;  
}

namespace B {  
    interface A { n: number }  
    import Y = A;    // 命名空间 A 的别名 
    import Z = A.X;  // A.X 的别名 
    var v: Z = Z;  
}


namespace AA {  
    export interface XX { s: string }  
}

namespace BB {  
    var AA = 1;  
    import YY = AA;  
}