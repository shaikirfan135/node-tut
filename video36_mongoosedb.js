//npm i mongoose
//https://www.npmjs.com/package/mongoose

const mongoose = require('mongoose');

const main = async ()=> {
    let conn = await mongoose.connect('mongodb://0.0.0.0:27017/e-comm');
    //schema to define the validation of the mongodb object properties
    //if we define only 2 pro[erties then only those 2 property 
    //values are inserted even if we pass all the properties
    const productSchema = new mongoose.Schema({
        name:String,
        price: Number,
        brand: String,
        category: String
    });
    //model is to bind the data between mongodb and node
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel(
        { name: '15 Pro', price: 5200, brand : 'Iphone', category : 'mobile' });
    let result = await data.save();
    console.log(result);
}

main();