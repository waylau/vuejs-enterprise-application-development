abstract class AbstractAnimal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}


abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 派生类中的构造函数必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 创建对抽象类型的引用
department = new Department(); // 错误!无法创建抽象类的实例
department = new AccountingDepartment(); // 正确
department.printName();
department.printMeeting();
department.generateReports(); // 错误！该方法不存在于抽象类上