const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    'title': String,
    'price': Number,
    'description': String,
    'category': String,
    'brand': String,
    'userId': String,
});

const productModel = new mongoose.model('products',productSchema )

module.exports = productModel;