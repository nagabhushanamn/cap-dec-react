

// ES5
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// ES6


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person :: constructor');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}

// let p1 = new Person('Nag', 33);

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary
        console.log('Employee :: constructor');
    }
    getBonus() {
        return this.salary * 0.02;
    }
}

// let e = new Employee('Nag', 33, 1000);

class Boss extends Employee {
    getBonus() {
        return this.salary * 0.2 + super.getBonus();
    }
}

let b = new Boss('Nag', 33, 1000);



// class Abc {
//     static staMethod() {
//         //...
//     }
// }

// Abc.staVar = 100;
