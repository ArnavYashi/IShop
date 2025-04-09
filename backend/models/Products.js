const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    imageurl:{
        type: String,
        default:"Image cannot be displayed"
    },
    description:{
        type: String,
        required: true,
        
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('products',ProductsSchema);