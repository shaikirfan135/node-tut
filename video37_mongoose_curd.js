//npm i mongoose
//https://www.npmjs.com/package/mongoose

const { name } = require('ejs');
const mongoose = require('mongoose');
const connectionUrl = 'mongodb://0.0.0.0:27017/e-comm';
mongoose.connect(connectionUrl);

//schema to define the validation of the mongodb object properties
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const saveInDB = async () => {
    //model is to bind the data between mongodb and node
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel(
        { name: '15 Pro', price: 5200, brand: 'Iphone', category: 'mobile' });
    let result = await data.save();
    console.log(result);
}

const updateInDB = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.updateMany(
        { name: '14 Pro max' },
        {
            $set: { price: 5300, brand: 'Iphone', category: 'mobile' }
        }
    )
    console.log(data);
}

const deleteInDB = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.deleteOne({ name: '14 Pro max' });
    console.log(data);
}

const findInDB = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.find().sort({price:'desc'});
    console.log(data);
}

findInDB();
//deleteInDB();
//updateInDB();
// saveInDB();