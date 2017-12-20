

/*

    data-types
    ----------

    1. simple / primitives   ==> values
    2. complex / reference   ==> objects

*/

/*

// 1. simple / primitives   ==> values

    a. string
    b. number
    c. boolean
    d. undefined 

*/

//-----------------------------------------------

// a. string

var name = "Nag";
var selection = 'abc';

//-----------------------------------------------

// b. number

var count = 12;
var cost = 12.12;

//-----------------------------------------------

// c. boolean

var found = true;

/*

    imp-note:

    falsy values ==>

    false,0,"",null,undefined,NAN

    ref : https://dorey.github.io/JavaScript-Equality-Table/

*/

//-----------------------------------------------

// 4. undefined

var v;

//-----------------------------------------------


// 2. complex / reference   ==> objects

/*

    how to create object in .js-lang ?

    var ref=new Constructor();

    imp-note:

    by default , all .js-objs are extensible & configurable

*/

// var config=new Object();
// config.url="http://"
// config.method="GET";
// config.success=function(){
//     console.log('on success...');
// }
// //...
// delete config.method;


//-----------------------------------------------

// literal-style objects

// a. Object ==> to create obj-wrapper

// var config=new Object();
// config.url="http://"
// config.method="GET";
// config.success=function(){
//     console.log('on success...');
// }

// // or 
// var newConfig={
//     url:'http://',
//     'url-method':'GET',
//     success:function(){

//     }
// };

//-----------------------------------------------

// b. Array

// var arr = new Array();
// arr.push('meals');
// arr.push('biryani');

// // or

// var newArray = ["meals", "biryani"];


//-----------------------------------------------

// c. RegExp

/*

    pattern : \d{10}
    complexPattern : ssn ==> \d{3}-\d{2}-\d{4}

// */

// var re=new RegExp('\\d{10}');
// var ssnPattern=new RegExp('\\d{3}-\\d{2}-\\d{4}');

// // or

// var newSSSNPattern=/\d{3}-\d{2}-\d{4}/;


//-----------------------------------------------


// d. Function


// var add=new Function("n1","n2","var r=n1+n2;return r;");


// // or

// function newAdd(n1,n2){
//     var r=n1+n2;
//     return r;
// }


//-----------------------------------------------


// How to access obj's properties ?

/*

    ==> . notation  , if property is valid identifier  else
    ==> [] notation 

*/

var config={
    url:'http://',
    'url-method':'GET'
};


