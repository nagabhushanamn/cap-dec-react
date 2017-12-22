

let name = "Nag";
let age = 33;

let addressType = "home"; // office | vacation

// ES5
let person = {
    name: name,
    age: age,
    address: 'chennai',
    sayName: function () {
        //..
    }
};

// ES6
let person = {
    name,
    age,
    [addressType + "-address"]: '...',
    sayName() {
        //..
    }
};
