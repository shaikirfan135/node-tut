const connectDB = require('./mongodbutil');

const update = async () => {
    console.log('update function');
    let conn = await connectDB();
    let res = await conn.updateOne(
        {name: 'c4', brand:'Sony'}, {$set: {price:900}}
    )
    if(res.acknowledged) {
        console.log('res', res)
        console.log('update completed');
    }
}

update();