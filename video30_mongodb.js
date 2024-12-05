// https://www.npmjs.com/package/mongodb
//https://www.youtube.com/watch?v=L-Ugvseg24o&list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At&index=31&ab_channel=CodeStepByStep
const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

//above both the lines are same first one is latest
//localhost = 0.0.0.0 (localhost not working)
const url = 'mongodb://0.0.0.0:27017/';
const dbName = 'e-comm';
const client = new MongoClient(url);


async function getData() {
    let conn = await client.connect();
    let ecommDB = conn.db(dbName);
    let collection = ecommDB.collection('products');
    let result = await collection.find({brand:'Iphone'}).toArray();
    console.log(result);


}

getData();