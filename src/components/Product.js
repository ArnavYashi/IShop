import React, { useContext, useEffect } from 'react'
import ProductItem from './ProductItem'
import productContext from '../context/products/ProductContext';

const Product = (props) => {
    const context = useContext(productContext);
    const {products,getProduct} = context;

    useEffect(() => {
      getProduct()
    }, [])
    
  return (
    <div className="row my-3">
        <h1>All Products</h1>
        <div className="container mx-2">
        {products.length===0 && 'No products to display'}
        </div>
        {products.map((product)=>{
            return <ProductItem key={product._id} product={product}/>
        })}

    </div>
  )
}

export default Product
