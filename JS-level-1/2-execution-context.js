
/*


 Execution-context / scope
 -------------------------

 memory/stack-frame(push), with giiven args & locals
 to execute given instructions in seq.


 2 phases
 -----------
  
 phase-1 : creation

    ==> any variables declared with 'var' keyword any-where in that context,
       will get hoisted to top with default value(defined)

 phase-2 : execution

    ==> instruction will execute in seq. 

-------------------------------------------

imp-notes:

every .js-runtime has one global-context by default.
global-context always executed by 'global-obj'

global-obj:

browser ==> window
Node.js ==> process
..


every function invocation also creates new-context,
which is child of in which-context that function declard.

*/


// var v=12;
// console.log(v);

//-----------------------------------------------

// var v = 12;
// function f1() {
//     console.log(v);
//     var v = 13;
// }
// f1();  // f1-context <--- global-context

//-----------------------------------------------

// var v = 12;
// function f1(){
//     function f2(){
//         console.log(v);
//     }
//     //f2(); // f2-context   <--- f1-context
//     var v=13;
//     return f2;
// }

// var f2Ref=f1();  // f1-context  <--- global-context
// f2Ref();

//-----------------------------------------------

// var v = 12;
// var v = 13;

//-----------------------------------------------


// var v = 100;
// if (true) {
//     var v = 200;
// }
// console.log(v);

//-----------------------------------------------




/*

    // bad about 'var' keyword

    ==> always variables will get hoist
    ==> we can re-declare same variable within context
    ==> no block-scope

    soln:

    using 'let' & 'const' kewords ( ES6 )

*/

// console.log(v);
// let v=12;


//-----------------------------------------------

// let v=12;
// let v=13;

//-----------------------------------------------

// var v = 100;
// if (true) {
//     let v = 200;
// }
// console.log(v);

//-----------------------------------------------

const tnr={
    name:'Nag'
};

// tnr=null;
tnr.name="New Tnr";