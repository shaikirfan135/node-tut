const express = require('express')
require('./mongooseutil');
const productModel = require('./productmodel');
const app = express();

app.use(express.json());

app.get('/search/:param', async (req, res) => {
    console.log(req.params.param);
    let data = await productModel.find(
        {
            "$or": [
                {"brand" : {$regex:req.params.param}},
                {"name" : {$regex:req.params.param}}
            ]
        }
    );
    res.send(data)
})


app.listen(5000);
