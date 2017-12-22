

/*

 we create function-obj in 2 ways

 a. function declaration

    ==> Named function
    ==> always get hoisted with func-obj
    ==> func-obj created context=creation phase

    when to use :

    ==> if context shud have this function always

 b. function expression

    ==> anonymous function
    ==> func-obj created context-execution phase

    when to use :

    ==> based on input/condition ,to create function

*/

//------------------------------------------------
// a. function declaration
// console.log(add(12, 13));
// function add(n1, n2) {
//     return n1 + n2;
// }
// console.log(add(12,13));
//------------------------------------------------

// b. function expression

// console.log(add(12,13));
// var add = function(n1, n2) { return n1 + n2; }    
// console.log(add(12,13));


//------------------------------------------------

// e.g

// function login() {
//     //..
//     return "admin"; // guest
// }

// var userType = login();
// var action;
// if (userType === "admin") {
//     action = function () { console.log('admin ...') }
// } else {
//     action = function () { console.log('guest ...') }
// }


//------------------------------------------------

/*

    FP principles
    ---------------

    ==> function as value/object
    ==> function as argument to other function
    ==> function as return-value from other function
    
    ==> partial functions / function-currying

*/

// #1

// function greet() {
//     console.log('Hello...');
// }

// let sayHello = greet;

//-----------------------------------------------


// function greet(f) {
//     if (f) { f(); return; }
//     console.log('Hello...');
// }
// greet();
// greet(function () { console.log('ola') });


//e.g


// let nums=[1,3,5,7,9,2,4,6,8,10];
// //nums.sort();
// nums.sort(function(a,b){return a-b;});

//---------------------------------------

// function teach() {
//     console.log('teaching...');
//     let learn = function () { console.log('learning..'); }
//     //learn();
//     console.log('teaching...end');
//     return learn;
// }

// let learnFunc = teach();
// learnFunc();
// learnFunc();

//--------------------------------------------

// function makeAdder(n1) {
//     return function (n2) {
//         return n1 + n2;
//     }
// }

// // let add10 = makeAdder(10);
// // console.log(add10(30));

// console.log(makeAdder(10)(30));

//--------------------------------------------


// // 

// function reflect() {
//     console.dir(arguments);
//     return arguments[0];
// }

// console.log(reflect(12,13,14));


// e.g

// function sum() {
//     let result = 0, i = 0, len = arguments.length;
//     while (i < len) {
//         result += arguments[i];
//         i++;
//     }
//     return result;
// }

// -----------------------------------------

// function getFood(){
//     return "No Food"
// }
// // let getFood=function-obj
// function getFood(pay){
//     if(arguments.length===0)return "No Food";
//     return "Biryani"
// }
// // let getFood=function-obj

// console.log(getFood(250));

// -----------------------------------------

// ES6 , New syntax to function params

/*

    ==> function with default-params
    ==> function with rest-params

*/

// ==> function with default-params

// function func(a=1, b=2) {
//     // if (!a) a = 1;
//     // if (!b) b = 2;
//     // a = a || 1;
//     // b = b || 2;
//     console.log(a);
//     console.log(b);
// }

// func(undefined, 20);

//-----------------------------------------

// ==> function with rest-params

// function func(a, ...r) {
//     console.log(a);
//     console.log(Array.isArray(r));
//     console.log(r);
// }

// func(12, 13, 14, 15, 16);