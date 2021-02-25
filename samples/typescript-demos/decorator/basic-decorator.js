var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 下面是使用类装饰器(@sealed)的例子
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var DecoratorGreeter = /** @class */ (function () {
    function DecoratorGreeter(message) {
        this.greeting = message;
    }
    DecoratorGreeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    DecoratorGreeter = __decorate([
        sealed
    ], DecoratorGreeter);
    return DecoratorGreeter;
}());
