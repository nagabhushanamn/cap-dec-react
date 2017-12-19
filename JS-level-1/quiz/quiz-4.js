

var myFunctions = [];

//---------------------------------------------------

function getF(i) {
    return function () { console.log(i) };
}

for (var i = 0; i < 2; i++) {
    //myFunctions.push(getF(i));
    myFunctions.push((function (i) {
        return function () {
            console.log(i)
        }
    })(i));
}
//---------------------------------------------------

myFunctions[0]();
myFunctions[1]();

//----------------------------------------------------