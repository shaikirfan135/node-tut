const connectDB = require('./mongodbutil');

//single entry
// const insert = async () => {
//     console.log('insert function');
//     const conn = await connectDB();
//     const res = await conn.insertOne(
//         {
//             name: "c4",
//             brand: "Song",
//             price: 700,
//             category: "mobile"
//           }
//     )
//     if(res.acknowledged) {
//         console.log('insert completed');
//     }
// }

//insert();

const insertAll = async () => {
    console.log('insert function');
    const conn = await connectDB();
    const res = await conn.insertMany(
        [
            {name: "c3", brand: "Sony", price: 600, category: "mobile"},
            {name: "c4", brand: "Sony", price: 700, category: "mobile"},
            {name: "z3", brand: "Sony", price: 1700, category: "mobile"},

        ]
    )
    if(res.acknowledged) {
        console.log('insert completed');
    }
}

insertAll();