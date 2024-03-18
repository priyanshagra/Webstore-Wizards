import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import OrderContext from '../context/order/orderContext';
import Orderitem from './Orderitem';
import Cartitem from './Cartitem';

const Yourcart = () => {
    let navigate = useNavigate();
    const context = useContext(OrderContext);
    const {cart ,getcart,isLoading} = context;
    useEffect(() => {
      if (localStorage.getItem('token')){
      getcart()
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
      {cart.length===0  &&  " Shoping start kardo"          }
        {cart.map(
            (carts)=>{
                return <Cartitem orders = {carts} />
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

export default Yourcart
