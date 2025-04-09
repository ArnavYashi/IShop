const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    totalamount:{
        type: Number,
        required: true
    },
    order_id:{
        type: String
    },
    razorpay_payment_id:{
        type: String,
        default: null
    },
    razorpay_order_id:{
        type: String,
        default: null
    },
    razorpay_signature:{
        type: String,
        default: null
    }
})

module.exports = mongoose.model('orders',OrderSchema);