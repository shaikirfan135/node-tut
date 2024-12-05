const connectDB = require('./mongodbutil');

const deleteFn = async () => {
    console.log('Delete function');
    
    let conn = await connectDB();
    let res = await conn.deleteMany({brand:'Song'});

    if(res.acknowledged) {
        console.log(res);
        console.log('Delete Completed');
    }
}

deleteFn();