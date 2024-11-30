//how node js works/ architecture
//call stack
//node api : the functions or methods inheritated from c/c++ not core of node
//callback queue
// event loop

console.log("starting up")

setTimeout(() => {
    console.log("2 second log")
}, 2000)

setTimeout(() => {
    console.log("0 second log")
}, 0)

console.log("finishing up")