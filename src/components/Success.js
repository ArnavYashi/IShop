import React from 'react'
import {useSearchParams} from 'react-router-dom'
const Success = () => {
  
  const [query]= useSearchParams();
  
  return (
    <div className='text-center d-flex justify-content-center align-items-center font-weight-bold h4 min-vh-100'>
      Congratulations <br/>
      Your Payment is Successful <br/>
      Transaction Id : {query && query.get('payment_id')}
    </div>
  )
}

export default Success
