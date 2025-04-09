import { useEffect, useState } from "react";
import productContext from "./ProductContext";

const ProductState = (props)=>{
    const host = 'http://localhost:8000'
    const [products,setProducts]= useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
    const productInitial = [];
    const [CartProducts,setCartProducts] = useState(productInitial);
    const getProduct = async()=>{
        const response = await fetch(`${host}/api/products/fetchallproduct`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json();
        setProducts(json)
    }

    const AddtoCart = async(id)=>{
        const response = await fetch(`${host}/api/cartproducts/addcartproducts/${id}`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MTU2MjJhZDdmYWM1YjUzNzZlZWVkIn0sImlhdCI6MTcyMDgwMDkyM30.cucs6ssaoQfJBI7aJb2zPCtjaG9oHTRDU4qzRlsI3N4'
            }
        })
        const json = await response.json();

        
    }

    const fetchCartProducts =async()=>{

        const response = await fetch(`${host}/api/cartproducts/fetchcartproducts`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
        "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MTU2MjJhZDdmYWM1YjUzNzZlZWVkIn0sImlhdCI6MTcyMDgwMDkyM30.cucs6ssaoQfJBI7aJb2zPCtjaG9oHTRDU4qzRlsI3N4'
            }
        })
        const json = await response.json();
        setCartProducts(json);
}
    
    const deleteCartProduct = async(id)=>{
        const response = await fetch(`${host}/api/cartproducts/deletecartproduct/${id}`,{
            method:'DELETE',
          headers:{
            'Content-Type': 'application/json',
            "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MTU2MjJhZDdmYWM1YjUzNzZlZWVkIn0sImlhdCI6MTcyMDgwMDkyM30.cucs6ssaoQfJBI7aJb2zPCtjaG9oHTRDU4qzRlsI3N4'
        },
      })
      const json = response.json();

      const newCartProducts = CartProducts.filter((cartproduct)=>{return cartproduct._id!==id});
      setCartProducts(newCartProducts);

    }

    const updatecartproduct = async(id,quantity)=>{
        const response = await fetch(`${host}/api/cartproducts/updatecartproduct/${id}`,{
            method:'PUT',
          headers:{
            'Content-Type': 'application/json',
            "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MTU2MjJhZDdmYWM1YjUzNzZlZWVkIn0sImlhdCI6MTcyMDgwMDkyM30.cucs6ssaoQfJBI7aJb2zPCtjaG9oHTRDU4qzRlsI3N4'
          },
        body:JSON.stringify({quantity})
      })
      const json = await response.json();
    
      let newquantity = JSON.parse(JSON.stringify(CartProducts))
      for(let index= 0;index<newquantity.length;index++){
            const element = newquantity[index]
            if(element._id==id){
                newquantity[index].quantity=quantity;
                break;
            }
        }
        setCartProducts(newquantity);

    }



    return(
        <productContext.Provider value={{products,getProduct,CartProducts,fetchCartProducts,AddtoCart,deleteCartProduct,updatecartproduct}}>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductState;