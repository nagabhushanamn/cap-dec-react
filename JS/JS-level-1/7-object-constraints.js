"use strict"


// let person = {
//     name: 'Nag',
//     age: 33
// };

// Object.defineProperty(person, 'name', { configurable: false, writable: false, enumerable: false });
// // delete person.name;
// // person.name = "bla";


// for (let p in person) {
//     console.log(person[p]);
// }

//-----------------------------------------------------------


// let person = {
//     name: 'Nag',
//     age: 33
// };

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

// person.newProp = "bla bla";
// delete person.name;
// person.name = "";


//------------------------------------------------------------




// let person = {
//     _name: 'Nag',
//     _age: 33,
//     set name(name) {
//         if (name) this._name = name;
//         else console.log('name cannot be blank');
//     },
//     get name() {
//         return this._name;
//     },
//     set age(age) {
//         this._age = age;
//     },
//     get age() {
//         return age;
//     }
// };

// person.name = "Nag N";  // write or set
// console.log(person.name); // tead or get









