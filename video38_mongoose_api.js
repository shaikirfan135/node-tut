//post api with mongoose

const express = require('express');
require('./mongooseutil');
const productModel = require('./productmodel');

const app = express();

app.use(express.json());

app.post('/create', async (req, res) => {
    console.log(req.body);
    let data = new productModel(req.body);
    let result = await data.save();
    res.send(result);
});

app.get('/list', async (req, res) => {
    let data = await productModel.find();
    res.send(data);
})

app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params);
    let data = await productModel.deleteOne(req.params)
    res.send(data)
})

app.put('/update/:_id', async (req, res) => {
    console.log(req.params);
    let data = await productModel.updateOne(
        req.params,
        {
            $set: req.body
        }
    )
    res.send(data)
})


app.listen(5000);