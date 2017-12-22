

/*

  this ==> context's owner

*/

// why we need 'this' keyword ?

// // let pName = "Global";
// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "Local";
//         console.log('im ' + pName); // reads context's hierarchy data
//         console.log('im ' + person.pName); // obj's property
//         console.log('im ' + this.pName); // context's owner data
//     }
// };
// // person.sayName();

// let p = person;
// person = { pName: 'cap' };
// p.sayName();

//--------------------------------------------------




/*

    function-binding

    a. static function-binding
    b. dynamic function-binding


*/


// a. static function-binding


// // let p1={name:'Nag',sayName:function(){console.log('im '+this.name)}};
// // let p2={name:'Ria',sayName:function(){console.log('im '+this.name)}};

// function sayNameForAll() {
//     console.dir(this);
//     console.log('im ' + this.name);
// }
// let p1 = { name: 'Nag', sayName: sayNameForAll };
// let p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im ??  // function-invocation ( this ==> global-obj )
// p1.sayName(); // im Nag    // method-invocation   ( this ==> invoker-obj)
// p2.sayName(); // im Ria

//----------------------------------------------------------------

// b. dynamic function-binding

// third-party
let greetLib = {
    sayName: function (message, from) {
        console.log(message + ' im ' + this.name + " : " + from);
    }
};
// greetLib.sayName();

// our code
//------------------------
let p = { name: 'Nag' };
//------------------------
let e = { name: 'CAP' };
//------------------------


// way-1:
// greetLib.sayName.call(p,'Hello','CHN');
// greetLib.sayName.call(e,"Hey","Universe");

// way-2:
// greetLib.sayName.apply(p,['Hello','CHN']);
// greetLib.sayName.apply(e,["Hey","Universe"]);

// way-3
// let personSayName=greetLib.sayName.bind(p,"Hello","CHN");
// personSayName();
// personSayName();
// let eSayName=greetLib.sayName.bind(e);
// eSayName('hey',"chn");
// eSayName('dude',"blr");

//--------------------------------------------------


// 100+ similar  person objs


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log('im ' + this.name);
    }
    this.sayAge = function () {
        console.log('im ' + this.age + " old");
    }
}

let p1 = new Person('Nag', 33);  // constructor invocation ( this ==> new-obj)
let p2 = new Person('Ria', 2);
//...

//---------------------------------------------------


/*


    in .js-lang , we can invoke any function in 4 ways

    1. function invocation ( this ==> global-obj )
    2. method invocation ( this ==> invoker-obj )
    3. call/apply/bind invocation  ( this ==> arg-obj )
    4. constructor invocation ( this ==> new-obj )
*/