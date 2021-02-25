class Greeter {
    greeting: string;
    
    // 构造函数
    constructor(message: string) {
    this.greeting = message;
    }
    
    // 欢迎方法
    greet() {
    return "Hello, " + this.greeting;
    }
}

// 初始化
let greeter = new Greeter("Way Lau");

console.log(greeter.greet());