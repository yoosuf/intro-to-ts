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

const john = new Person("Tharindu Dissa", 18);

console.log(john.describe());