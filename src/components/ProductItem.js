import React, { useContext } from 'react'
import productContext from '../context/products/ProductContext'

const ProductItem = (props) => {
  const {product} = props
  const context = useContext(productContext)
  const {AddtoCart} = context;
  const handleClick =(e)=>{
    e.preventDefault();
    AddtoCart(product._id)
  }

  return (
    <div className="col-md-3 my-3">
  <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={product.imageurl} alt="Card image cap" style={{width:'17rem',height:'18rem'}}/>
    <div className="card-body">
      <h5 className="card-title">{product.title?product.title:"Card Title"}</h5>
      <p className="card-text">{product.description?product.description:"Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
      <h5 className='card-text text-danger my-3'>{product.price?`Rs. ${product.price}`:"Rs.2000"}</h5>
      <button className="btn btn-primary" onClick={handleClick}>Add to Cart</button>
    </div>
  </div>
    </div>
      

  )
}

export default ProductItem
