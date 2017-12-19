


// let arr = [1, 2, 3, 4, 5];
// let o = {};


// for (let v of arr) {
//     console.log(v);
// }

// let nums=[...arr];

// let [a, b, c, d, e] = arr;

//--------------------------------------------------

let idMaker = {
    [Symbol.iterator]: function () {
        let id = 0;
        return {
            next: function () {
                id++;
                return { value: id <= 10 ? id*10 : undefined, done: id <= 10 ? false : true }
            }
        };
    }
};

// for(let id of idMaker){
//     console.log(id);
// }

// let ids=[...idMaker];

let [id1,id2,id3,id4]=idMaker;


function func(id1,id2,id3){
    console.log(id1);
    console.log(id2);
    console.log(id3);
}
func(...idMaker);