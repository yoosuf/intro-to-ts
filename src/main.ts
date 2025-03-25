// person class
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

// customer class
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

// admin class
class Administrator extends Person {
    role: string;
    constructor(name: string, age: number, role: string) {
        super(name, age);
        this.role = role;
    }
    describe(): string {
        return `${super.describe()} Role: ${this.role}.`;
    }
}

const tharindu = new Person("Tharindu Dissa", 18);
const supun = new Customer("Supun", 18, 2323);
const chandana = new Administrator("Chandana", 40, "Manager");



console.log(tharindu.describe());
console.log(supun.describe());
console.log(chandana.describe());