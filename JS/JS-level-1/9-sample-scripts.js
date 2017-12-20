

// #1

// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }

// console.log(bar(7)); //returns 42

//--------------------------------------------

// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz();

//--------------------------------------------


// function foo(){throw new Error('oops')}
// function bar(){foo()}
// function baz(){bar()}
// baz();

//--------------------------------------------

// function foo(){
//     foo();
// }
// foo();

//----------------------------------------------


// function longRunning() {
//     var i = 0;
//     while (i < 5) {
//         console.log('long...');
//         i++;
//     }
// }

// function shortRunning() {
//     console.log('short..');
// }

// longRunning();
// shortRunning();


//-------------------------------------------------


// console.log('start....');

// $.on('.veg', 'click', function vegHandler(e) {
//     console.log('handle event on .veg elements');
// });

// $.on('.nonveg', 'click', function nonVegHandler(e) {
//     console.log('handle event on .nonveg elements');
// });

// console.log('cont with other work...');

// function longRunning() {
//     var i = 0;
//     while (i < 5) {
//         console.log('long...');
//         i++;
//     }
// }
// longRunning();


//-------------------------------------------------

console.log('start..');

setTimeout(function timeout(){
    console.log('after timeout..');
},1000);

console.log('cont with other work...');

function longRunning() {
    var i = 0;
    while (i < 5) {
        console.log('long...');
        i++;
    }
}
longRunning();
