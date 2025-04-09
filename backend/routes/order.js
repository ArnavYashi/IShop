const express = require("express");
const order = require("../models/order");
const Razorpay = require("razorpay");
const router = express.Router();
const crypto = require('crypto');

const RazorpayInstance = new Razorpay({
    key_id:'rzp_test_F2Uzns5p3d8vRK',
    key_secret:'oYzxBSE9AVQqJPzpExEZzP6o'
})


router.post('/payment/checkout',async(req,res)=>{
    
    const {name,amount} = req.body;

    const razeorder = await RazorpayInstance.orders.create({
        amount: Number(amount*100),
        currency:"INR"
    })

    await order.create({
        order_id:razeorder.id,
        name:name,
        totalamount:amount
    })
    console.log({razeorder})
    res.json(razeorder);

})


// router.post('/payment/payment-verification',async(req,res)=>{
    
//     const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body;

//     const body_data = razorpay_order_id+"|"+razorpay_payment_id

//     const expect = crypto.createHmac('sha256','oYzxBSE9AVQqJPzpExEZzP6o').update(body_data).digest("hex")

//     if(expect){
//         await order.findOne({order_id:razorpay_order_id},{$set:{razorpay_payment_id,razorpay_order_id,razorpay_signature}})
//         res.redirect(`http://localhost:3000/success`);
//         return
//     }
//     else{
//         res.redirect("http://localhost:3000/failed")
//         return
//     }

// })

module.exports= router