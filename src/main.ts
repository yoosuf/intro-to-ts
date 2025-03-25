class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    describe(): string {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Customer extends Person {
    customerId: number;
    constructor(name: string, age: number, customerId: number) {
        super(name, age);
        this.customerId = customerId;
    }
    describe(): string {
        return `${super.describe()} Customer ID: ${this.customerId}.`;
    }
}


const tharindu = new Person("Tharindu Dissa", 18);
const tharinduCustomer = new Customer("Tharindu Dissa", 18, 2323);


console.log(tharindu.describe());
console.log(tharinduCustomer.describe());