const mongoose = require("mongoose");

const CartProductsSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    quantity:{
        type: Number,
        default: 1
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('cartproduct',CartProductsSchema);