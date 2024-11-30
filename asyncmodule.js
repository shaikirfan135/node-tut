//synchronous
// console.log("first")
// console.log("second")
// console.log("third")

let a=10
let b=0
//async
console.log("first")
// setTimeout(()=> {
//     b=20
//     console.log("second")
// },3000);

//Promise : waits for the execution of internal logic and provides the result
//resolve : contains the value or result
//reject : provides reason or error

let result = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve(20)
        console.log("second")
    },3000);
})

result.then((data)=>{
    b = data;
    console.log(a+b)
})
console.log("third")

