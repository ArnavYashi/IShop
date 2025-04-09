import React from 'react'

const Total = (props) => {
    const {cartproduct} = props;
  return (
    <div className='container d-flex'>
      <div style={{width:'50%'}}>
      <p>{cartproduct.productid.title ? cartproduct.productid.title : "Card title"}</p>
      </div>
      <div style={{width:'20%'}}>
      <p style={{marginLeft:'35px'}}>{cartproduct.quantity}</p>
      </div>
      <div style={{width:'30%',justifyContent:'right',display:'flex',marginRight:'15px'}}>
      <p>{cartproduct.productid.price ? cartproduct.productid.price * cartproduct.quantity : "Rs.2000"}</p>
      </div>
      </div>
  )
}

export default Total
