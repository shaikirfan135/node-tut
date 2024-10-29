//import {x} from './app'
const app = require('./app');
const color = require('colors');

console.log("hello".bgBlue);
console.log(app.x);
console.log(app.y);



// var x = 20
// let y = 30
// const z = 40
// y = 100
// console.log(x+y+z)

// //=== check the type as well, whereas == just compares the contents

// if(x==20) {
//     console.log("matched");
// } else {
//     console.log("unmatched");
// }

// for(i=0; i<=10; i++) {
//     console.log(i);
// }

 const arr=[2,4,7,1,3,8,3];
// console.log(arr)
// console.log(arr[0])

let result = arr.filter((item) => {
    //console.log(item)
    return item >= 4
})

console.log(result)