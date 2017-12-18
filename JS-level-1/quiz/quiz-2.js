


// let nagTnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " : teaching .js");
//         let p=this;
//         let doLearn = function () {
//             console.log(this.name + " learning .js from " + p.name);
//         };
//         // doLearn();
//         let emp = { name: 'CAP' };
//         doLearn.call(emp);
//         //console.log(this.name + " : teaching .js end");
//     }
// };

// nagTnr.doTeach()
// let kannanTnr = { name: 'kannan' };
// nagTnr.doTeach.call(kannanTnr);


//----------------------------------------------------

function sessionStart() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching .js");
            let notes = ".js notes"
            let self = this;
            let doLearn = function () {
                console.log(this.name + " learning with " + notes + " from " + self.name);
            }
            return doLearn;
        }
    }
    function Employee(name) {
        this.name = name;
    }
    let tnr = new Trainer('Nag');  // constructor invocation
    let e1 = new Employee('A');
    let e2 = new Employee('B');
    let learnFunc = tnr.doTeach(); // method-invocation
    learnFunc.call(e1);  // call/apply/bind invocation
    learnFunc.call(e2);
}

sessionStart();  // function invocation










