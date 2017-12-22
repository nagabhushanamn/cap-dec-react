

// let getPrice = function () {
//     return 100 + 300;
// }


// let getPrice = () => {
//     return 100 + 300;
// }


// let getPrice = () => 100 + 300;
// let getPrice = (count) => count * (100 + 300);
// let getPrice = count => count * (100 + 300);
// let getPrice = (count, tax) => count * (100 + 300) + tax;
// let getPrice = (count, tax) => {
//     let cost = count * (100 + 300);
//     let total = cost + tax;
//     return total;
// };



// why/where we need 'arrow' function?

/*

    ==> for compact function-arg

*/


// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort(function (a, b) { return a - b });
// nums.sort((a, b) => a - b);

//-------------------------------------------------------

/*

    limtations with regular-function(s)

        ==> by default,  bound to global-obj
        ==> we can bind to any obj dynamically


     advantages of arrow-function:
      ==> always bound to 'creator' obj

*/


// let tnr = {
//     name: 'Nag',
//     teach() {
//         console.log('teaching .js');
//         // let askQues = function (q) {
//         //     console.log(`${this.name} answering ${q}`)
//         // }
//         //
//         let askQues = (q) => {
//             console.log(`${this.name} answering ${q}`)
//         }
//         console.log('teaching .js end..');
//         return askQues;
//     }
// };

// let askQues = tnr.teach();
// console.log("--------------");
// askQues('q1');
// let tempTnr = { name: 'kannan' };
// askQues.call(tempTnr, "q2");



//---------------------------------------------------------



// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(`${this.num} -invoice processs`);
//     }
// };


// let invoice = {
//     num: 123,
//     process: () => {
//         console.log(`${this.num} -invoice processs`);
//     }
// };


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(`${this.num} -invoice processsed partially`);
//         let complete1 = function () {
//             console.log(`${this.num} -invoice processsed completely`);
//         }
//         return complete1;
//     }
// };


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(`${this.num} -invoice processsed partially`);
//         let complete1 = () => {
//             console.log(`${this.num} -invoice processsed completely`);
//         }
//         return complete1;
//     }
// };



// let complete1 = invoice.process();
// complete1();


//-------------------------------------------------------------


function Person(name, age) {
    this.name = name;
    this.age = age;
    let self = this;
    let incAge =  () => {
        console.dir(this);
        this.age++;
        console.log(this.name + " ==> " + this.age);
    }
    window.setInterval(incAge, 1000);
}

let p = new Person('Ria', 0);