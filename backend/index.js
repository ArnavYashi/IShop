const connectToMongo = require("./db");
const express = require("express")
const cors = require('cors')



connectToMongo();

const app =express();
const port = 8000


app.use(cors())
app.use(express.json())

// Available Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/products', require('./routes/products'))
app.use('/api/cartproducts', require('./routes/cartproducts'))
app.use('/',require('./routes/order'))



app.listen(port,()=>{
    console.log(`iNotebook backend listening at http://localhost:${port}`);
})