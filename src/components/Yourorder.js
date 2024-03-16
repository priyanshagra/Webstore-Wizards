import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import OrderContext from '../context/order/orderContext';
import Orderitem from './Orderitem';



const Yourorder = () => {
  
  let navigate = useNavigate();
    const context = useContext(OrderContext);
    const {order ,getOrder,isLoading} = context ;
    useEffect(() => {
      if (localStorage.getItem('token')){
      getOrder()
      }
      else{
        navigate("/login");
      }// eslint-disable-next-line
    },[])
    
  return (
    <div className='container '>
      <div>
        {isLoading ? <div>Loading...</div> : <div></div>}
      </div>
        
       <h2>Your orders</h2>
      {order.length===0  &&  " Shoping start kardo"          }
        {order.map(
            (orders)=>{
                return <Orderitem orders = {orders} />
            }
        )
      }
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    
  )
}

export default Yourorder
