function first() {
    console.log("first(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
    }
}

function second() {
    console.log("second(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("second(): called");
    }
}

class C {
    @first()
    @second()
    method() {}
}