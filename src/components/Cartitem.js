import React, { useContext, useState } from 'react'
import OrderContext from '../context/order/orderContext';
import { Navigate } from 'react-router-dom';
import { useToast } from "@chakra-ui/react";
import displayRazorpay from './paymentintgate';

const Cartitem = (props) => {

    const context = useContext(OrderContext);
    const {addOrder} = context;
    const [isLoading, setIsLoading] = useState(false);
    const {orders} = props;
    const toast = useToast();
    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        await addOrder(orders.title , orders.primary_colour , orders.secondary_colour , orders.sleeve , orders.collar, orders.titletoshow , orders.position , orders.size);
        toast({
            title: "Sucessfull",
            description: "Congrutulation order bought successfully payment details will be sent on email!HAPPY SHOPPING",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom-left",
          });
    
        await fetch(
          "https://trendytonebackend.onrender.com/sendemailafterorder",
          {
            method: "POST",
            headers: {
              "auth-token":localStorage.getItem('token'),
            }
          }
        )
        displayRazorpay();
        setIsLoading(false);
      };
      
    return (
      <div>
        <div>
      {isLoading ? <div>Loading...</div> : <div></div>}
    </div>
      <div style={{padding:20}}>
        <div style={{textAlign:"center"}}><h1>{orders.title}</h1></div>
         <div>
          <ul>
            <li>
              <strong>Size:{orders.size}</strong>
            </li>
            <li>
              <strong>Collar:{orders.collar}</strong> 
            </li>
            <li>
              <strong>Sleeve:{orders.sleeve}</strong>
            </li>
            <li>
              <strong>Primary Colour:{orders.primary_colour}</strong>
            </li>
            <li>
              <strong>Secondary Colour:{orders.secondary_colour}</strong> 
            </li>
          </ul>
          </div>
      </div>
      <button type="button" class="btn btn-primary" onClick={handleSubmit}>Buy Now</button>
      </div>
    )
}

export default Cartitem
