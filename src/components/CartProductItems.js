import React, { useContext, useEffect } from 'react'
import productContext from '../context/products/ProductContext';

const CartProductItems = (props) => {
  const context = useContext(productContext);
  const {deleteCartProduct,updatecartproduct} = context;
  const { cartproduct } = props;

  const handleClick=(a)=>{
    updatecartproduct(cartproduct._id,cartproduct.quantity+a);
  }

  return (
    <div className="card mb-3" style={{ maxWidth: "1200px" }}>
      <div className="row g-0">
        <div className="col-md-3">
          <img src={cartproduct.productid.imageurl ? cartproduct.productid.imageurl : "12345"} className="img-fluid rounded-start" alt="Card image cap" />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <div className='icon'>
              <h5 className="card-title">{cartproduct.productid.title ? cartproduct.productid.title : "Card title"}</h5>
              <i className="fa-regular fa-trash-can pointer mx-3 mt-1" onClick={() => {
                deleteCartProduct(cartproduct._id);
                // props.showAlert("Deleted successfully", "success");
              }}>
              </i>
            </div>
            <p className="card-text">{cartproduct.productid.description ? cartproduct.productid.description : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}</p>
            <h5 className='card-text text-danger'>{cartproduct.productid.price ? `Rs. ${cartproduct.productid.price * cartproduct.quantity}` : "Rs.2000"}</h5>
          </div>
        </div>
        <div className="col-md-2 quantity">
          <div className="container">
            <button className='btn btn-primary mx-2' onClick={()=>handleClick(1)}>+</button>
            {cartproduct.quantity}
            <button disabled={cartproduct.quantity==1} className='btn btn-primary mx-2' onClick={()=>handleClick(-1)}>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProductItems
