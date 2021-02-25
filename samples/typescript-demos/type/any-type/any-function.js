var notSure = 4;
notSure.ifItExists(); // ifItExists 可能在运行时存在
notSure.toFixed(); //  toFixed 存在
var prettySure = 4;
prettySure.toFixed(); // 错误！toFixed 不存在于 Object 类型
