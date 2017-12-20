(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log('-app.js-');

// var app = app || {};
// app.mod1.doWork();


//---------------------------------------------------------


// let mod1 = require('./pack1');
// console.log('-------------------');
// mod1.greet();
// mod1.greet('en');
// mod1.greet('es');
// console.log('-------------------');

//---------------------------------------------------------

let m=require('cap-dec-greet');
m.greet();
m.greet('en');



},{"cap-dec-greet":2}],2:[function(require,module,exports){


// var o={
//     doWork:function(){
//         console.log('im mod1');
//     }
// };

//----------------------------------------------------

// var app = app || {};

// (function () {

//     app.mod2.doWork();
//     app.mod3.doWork();

//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };

//     app.mod1 = o;

// })();

//----------------------------------------------------

console.log('-mod1.js-');
let en = require('./mod2');
let es = require('./mod3');

let message = "good morning";
function greet(lang) {
    //console.log(message);
    if (lang === "en") {
        en(); return;
    }
    if (lang === "es") {
        es(); return;
    }
    console.log('vanakkam');
}
// greet();
module.exports = {
    greet
}
},{"./mod2":3,"./mod3":4}],3:[function(require,module,exports){


// var o={
//     doWork:function(){
//         console.log('im mod2');
//     }
// };


//----------------------------------------------------
// var app = app || {};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };
//     app.mod2 = o;

// })();
//----------------------------------------------------
console.log('-mod2.js-');
function greet() {
    console.log('Hello...');
}
module.exports = greet;
},{}],4:[function(require,module,exports){


// var o={
//     doWork:function(){
//         console.log('im mod3');
//     }
// };


//----------------------------------------------------
// var app = app || {};

// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };
//     app.mod3 = o;
// })();

//----------------------------------------------------
console.log('-mod3.js-');
function greet() {
    console.log('Ola...');
}
module.exports = greet;
},{}]},{},[1]);
