


let nagTnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " : teaching .js");
        let doLearn = function () {
            console.log(this.name + " learning .js from " + ??);
        };
        // doLearn();
        let emp = { name: 'CAP' };
        doLearn.call(emp);
        //console.log(this.name + " : teaching .js end");
    }
};

nagTnr.doTeach()
let kannanTnr = { name: 'kannan' };
nagTnr.doTeach.call(kannanTnr);