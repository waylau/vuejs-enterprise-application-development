interface A { x: string; }

namespace M {  
    export interface B { x: A; }  
    export interface C { x: B; }  
    export function foo(c: C) {}  
}