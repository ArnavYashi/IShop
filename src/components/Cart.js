import React, { useContext, useEffect, useState } from 'react'
import productContext from '../context/products/ProductContext'
import { useNavigate } from 'react-router';
import CartProductItems from './CartProductItems';
import Total from './Total';

const Cart = (props) => {
  const context = useContext(productContext);
  const {fetchCartProducts,CartProducts} = context;
  const navigate = useNavigate();
  const [Totals,setTotals]= useState(5000);

  useEffect(()=>{
    fetchCartProducts()
      // if(localStorage.getItem('token')){
        
      // }
      // else{
      //   navigate('/login')
      // }    
  }, [])

  useEffect(()=>{
    TotalBill();
  },[CartProducts])

    const TotalBill = ()=>{
      let a=200;
      CartProducts.map((cartproduct)=>{
        a+=cartproduct.quantity * cartproduct.productid.price;
      })
      setTotals(a);
    }

    const CheckoutHandler = async(name,amount)=>{
      const response = await fetch('http://localhost:8000/payment/checkout',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({name,amount})
      })
      const order = await response.json();
      console.log(order);

      var options = {
        "key": "rzp_test_F2Uzns5p3d8vRK", // Enter the Key ID generated from the Dashboard
        "amount": order.totalamount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": order.currency,
        "name": order.name,
        "description": "Test Transaction",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.softwarecraftsperson.com%2F2021%2F01%2F23%2Freact-aka-reactjs%2F&psig=AOvVaw3ov-AVSI4g2MtAyIbTvvFr&ust=1727606805890000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjViIG75YgDFQAAAAAdAAAAABAE",
        "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
          if(response.razorpay_payment_id){
            navigate(`/success?payment_id=${response.razorpay_payment_id}`);

          }
          else{
            navigate(`/failed`);

          }

        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
    },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
      console.log(order);
    }




  return (
    <>
    <div className="row my-3">
        <h1>Your Cart</h1>
        <div className="container mx-2">
        {CartProducts.length===0 && 'Cart is empty'}
        </div>
        <div style={{display:'grid', justifyContent:'center'}}> 
        {CartProducts.length!=0 && CartProducts.map((cartproduct)=>{
          return <CartProductItems key={cartproduct._id} cartproduct={cartproduct} TotalBill={TotalBill}/>
        })}
        </div>
    </div>
    {CartProducts.length!=0 && <div className='container' style={{border:'solid black 2px', padding:'10px', marginBottom:"5vh" }}>
      <h2>Bill Summary</h2>
      <div className='container d-flex' style={{alignItems:'center'}}>
      <div  style={{width:'50%'}}>
      <p style={{marginBottom:'0px', marginTop:'0px', fontSize:'1.3rem'}}>Products</p>
      </div>
      <div style={{width:'20%'}}>
      <p style={{marginBottom:'0px', marginTop:'0px', fontSize:'1.3rem'}}>Quantity</p>
      </div>
      <div style={{width:'30%',justifyContent:'right',display:'flex',marginRight:'15px'}}>
      <p style={{marginBottom:'0px', marginTop:'0px', fontSize:'1.3rem'}}>Price</p>
      </div>
      </div>

      
       <hr style={{ color: 'black', opacity: '1', display: "block",marginTop: '.5em',marginBottom: '0.5em',
      marginLeft: 'auto',marginRight: 'auto',borderStyle: 'inset',borderWidth: '2px',
}}/>
      {CartProducts.map((cartproduct)=>{
        return <Total key={cartproduct._id} cartproduct={cartproduct}/>
      })}
      <hr style={{ color: 'black', opacity: '1', display: "block",marginTop: '0.5em',marginBottom: '0.5em',
      marginLeft: 'auto',marginRight: 'auto',borderStyle: 'inset',borderWidth: '2px',
}}/>
    <div className='container d-flex'>
      <div style={{width:'70%'}}>
      <p>Delivery Fee</p>
      </div>
      <div style={{width:'30%',justifyContent:'right',display:'flex',marginRight:'15px'}}>
      <p>100</p>
      </div>
      </div>
      <div className='container d-flex'>
      <div style={{width:'70%'}}>
      <p>SGST</p>
      </div>
      <div style={{width:'30%',justifyContent:'right',display:'flex',marginRight:'15px'}}>
      <p>50</p>
      </div>
      </div>
      <div className='container d-flex'>
      <div style={{width:'70%'}}>
      <p>CGST</p>
      </div>
      <div style={{width:'30%',justifyContent:'right',display:'flex',marginRight:'15px'}}>
      <p>50</p>
      </div>
      </div>
    <hr style={{ color: 'black', opacity: '1', display: "block",marginTop: '0.5em',marginBottom: '0.5em',
      marginLeft: 'auto',marginRight: 'auto',borderStyle: 'inset',borderWidth: '2px',
}}/>
 <div className='container d-flex'>
      <div style={{width:'70%',fontSize:'1.3rem'}}>
      <p>Total</p>
      </div>
      <div style={{width:'30%',justifyContent:'right',display:'flex',marginRight:'15px'}}>
      <p>{Totals}</p>
      </div>
      </div>
    </div>}
    <div className='container d-flex justify-content-end'>
    <button type="button" className="btn btn-success" onClick={()=>CheckoutHandler('All Products',Totals)}>Proceed to CheckOut</button>
    </div>
    <br/>
    <br/>
    </>
  )
}

export default Cart;
