


// a. array 


// let nums = [100, 200, 300, 500, [10, 20]];

// // let min = nums[0];
// // let avg = nums[1];
// // let max = nums[2];

// // or

// let [min, , max, other = 400, [x, y]] = nums;

//--------------------------------------------------

// b. object 



let person={
    name:'Nag',
    age:33
};

// let name=person.name;
// let age=person.age;
// or
// let {name,age}=person;

//---------------------------------------------

// let myName=person.name;
// let myAge=person.myAge;
// or
// let {name:myName,age:myAge}=person;

//---------------------------------------------

let name="Nil";
let age=0;

({name,age}=person);