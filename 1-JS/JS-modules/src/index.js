console.log('-app.js-');

// var app = app || {};
// app.mod1.doWork();


//---------------------------------------------------------


// let mod1 = require('./pack1');
// console.log('-------------------');
// mod1.greet();
// mod1.greet('en');
// mod1.greet('es');
// console.log('-------------------');

//---------------------------------------------------------

// let m=require('cap-dec-greet');
// m.greet();
// m.greet('en');

//---------------------------------------------------------

// import { food, price } from './hotel/menu';
// import { food as myFav, price } from './hotel/menu';
// import * as todayMenu from './hotel/menu';

//---------------------------------------------------------------

// import { food, price } from './hotel/menu';
// console.log(food);
// console.log(price);

//---------------------------------------------------------------
// import { nonVeg } from './hotel/menu';
// // nonVeg={};  // error , treat imported members as constant

// nonVeg.name="chiken biryani";

//---------------------------------------------------------------

import MainComp, { Comp1, Comp2 } from './hotel/menu';

//---------------------------------------------------------------