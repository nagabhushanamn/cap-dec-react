

/*

    A closure is a function having access to the parent scope, 
    even after the parent function has closed.


    where/when i shud use ?

    ==> to abstract public behav of any module to other
    ==> while executing any func async, to access parent scoped data

*/

// function teach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + "-notes";
//     let fun = "bla bla bla";
//     let learn = function () {
//         console.log('learning with ' + notes);
//     }
//     //learn();
//     console.log('teaching end...');
//     return learn;
// }


// let learnFunc = teach('.js'); // teach-contex with given args & locals

// learnFunc();

//--------------------------------------------------------

// ==> to abstract public behav of any module to other

// e.g

/*

    counter module

      count: 0

      doCount()
      getCount()

        
      module design pattern : self-executable / IIFE ( Imme.. Invo..Func..Exp..)

*/


let counter = (function () {
    var count = 0;  // private
    // public
    function doCount() {
        count++;
    }
    function getCount() {
        return count;
    }
    let o = {
        inc: doCount,
        get: getCount
    };
    return o;
})();
