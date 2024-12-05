const { name } = require('ejs');
const connectDB = require('./mongodbutil');
const express = require('express');
const mongodb = require('mongodb');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let  conn = await connectDB();
    let result = await conn.find({brand:'Iphone'}).toArray();
    console.log(result);
    res.send(result);
});

app.post('/', async(req, res) => {
    console.log(req.body)
    let conn = await connectDB();
    let result = await conn.insertOne(req.body);
    if(result.acknowledged) {
        res.send(result);
    }
})

app.put('/:name', async (req, res) => {
    console.log('PUT method');
    console.log(req.body.name);
    let conn = await connectDB();
    // let searchRec = await conn.find({name: req.body.name, brand: req.body.brand}).toArray();
    // console.log("---------------------------")
    // console.log(searchRec[0].price)
    // console.log("---------------------------")
    // searchRec[0].price = req.body.price;
    // console.log(searchRec[0])
    let result = await conn.updateMany(
        // {name: req.body.name, brand: req.body.brand}, 
        // {$set: {price: req.body.price}}
        // {name: req.body.name, brand: req.body.brand}, 
        // {$set: req.body}
        {name: req.params.name}, 
        {$set: req.body}
    );
    console.log(result);
    res.send(result);
})

app.delete('/:id', async (req, res) => {
    console.log('Delete method')
    let conn = await connectDB();
    let result = await conn.deleteMany(
        {_id: new mongodb.ObjectId(req.params.id)}); 
    console.log('Delete Completed')
    res.send({msg : 'Delete Successful'});
})


app.listen(5000);


