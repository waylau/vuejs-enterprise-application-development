function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("I am a String");

let output2 = identity("I am a String");