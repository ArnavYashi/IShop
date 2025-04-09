const express = require("express")
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");
const { body, validationResult } = require('express-validator');
const Products = require("../models/Products");


//Route 1: Get All the Notes using: GET "/api/notes/fetchallnotes", login required
router.get('/fetchallproduct', async (req, res) => {
    try {
        const product = await Products.find()
        res.json(product)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})

router.get('/fetchallproduct/:id', async (req, res) => {
    try {
        const product = await Products.findById(req.params.id)
        res.json(product)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})


//Route 2: Add a new  Notes using: POST "/api/notes/addnote". login required
router.post('/addproduct', [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('price', 'Price cannot be blank').exists(),
    body('category', 'Category cannot be blank').exists(),
], async (req, res) => {
    try {
        const { title, description, price,category,imageurl } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const product = new Products({
            title, description,price,category,imageurl
        })
        const savedproduct = await product.save()


        res.json(savedproduct)
         
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})


//Route 3: Update an existing  Notes using: PUT "/api/notes/updatenote". login required
router.put('/updateproduct/:id', async (req, res) => {
    const {price,title,imageurl} = req.body;
    try {
        
        const newnote = {};
        if(price){newnote.price = price};
        if(title){newnote.title = title};
        if(imageurl){newnote.imageurl=imageurl};
        
        //find the note to be updated and update it

        const product = await Products.findByIdAndUpdate(req.params.id,{$set: newnote}, {new:true})
        res.json({product});
    }catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    } 
})

//Route 4: Delete an existing  Notes using: DELETE "/api/notes/deletenote". login required
router.delete('/deleteproduct/:id', async (req, res) => {
    try {        
        const product = await Products.findByIdAndDelete(req.params.id)
        res.json({"Success": "product has been deleted",product:product});
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})


module.exports = router

