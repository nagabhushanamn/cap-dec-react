

function func(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}


let nums = [1, 2, 3];

// func(nums[0],nums[1],nums[2]);

// or

func(...nums);


//------------------------------------

let a = [0, 1, 2, 3];
let b = [7, 8, 9, 10];

let c = [...a, 4, 5, 6, ...b];

//------------------------------------
