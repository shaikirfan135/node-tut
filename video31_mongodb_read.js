
const connectDB = require('./mongodbutil')

// connectDB().then((resp) => {
//     resp.find({brand:'Iphone'}).toArray().then((data) => {
//         console.log(data);
//     })
// });

const main= async ()=> {
    console.log("main function called")
    let conn = await connectDB();
    let res = await conn.find({brand:'nokia'}).toArray();
    console.warn(res);
}

main();