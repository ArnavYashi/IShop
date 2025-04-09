const express = require("express")
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");
const { body, validationResult } = require('express-validator');
const CartProduct = require("../models/CartProduct");
const Products = require("../models/Products");



//Route 1: Get All the Notes using: GET "/api/notes/fetchallnotes", login required
router.get('/fetchcartproducts', fetchuser, async (req, res) => {
    try {
        const cartproduct = await CartProduct.find({ user: req.user.id }).populate('productid');
        res.json(cartproduct)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})


//Route 2: Add a new  Notes using: POST "/api/notes/addnote". login required
router.post('/addcartproducts/:id', fetchuser, async (req, res) => {
    try {
        const product =await Products.findById(req.params.id);
        if(!product){res.status(404).send("Not Found")}
        const productid = product.id;

        const cartproduct = new CartProduct({
            user: req.user.id,productid
        })
        const savedcartproduct = await cartproduct.save()


        res.json(savedcartproduct)
         
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})


//Route 3: Update an existing  Notes using: PUT "/api/notes/updatenote". login required
router.put('/updatecartproduct/:id', fetchuser, async (req, res) => {
    const {quantity}= req.body;
    try {
        const newnote = {};
        if(quantity){
            newnote.quantity = quantity
        };
        
        //find the note to be updated and update it
        let cartproduct = await CartProduct.findById(req.params.id);
        if(!cartproduct){return res.status(404).send("Not Found")}

        if(cartproduct.user.toString()!==req.user.id){
            return res.status(401).send("Not Allowed");
        }
        
        cartproduct = await CartProduct.findByIdAndUpdate(req.params.id,{$set: newnote}, {new:true})
        res.json(cartproduct);
    }catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    } 
})

//Route 4: Delete an existing  Notes using: DELETE "/api/notes/deletenote". login required
router.delete('/deletecartproduct/:id', fetchuser, async (req, res) => {
    try {
        
        //find the note to be deleted and delete it
        let cartproduct = await CartProduct.findById(req.params.id);
        if(!cartproduct){return res.status(404).send("Not Found")}
        
        //Allow deletion only if user owns this note
        if(cartproduct.user.toString()!==req.user.id){
            return res.status(401).send("Not Allowed");
        }
        
        cartproduct = await CartProduct.findByIdAndDelete(req.params.id)
        res.json({"Success": "product removed from cart successfully",cartproduct:cartproduct});
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})


module.exports = router

