import { useState } from "react";
import OrderContext from "./orderContext";


const OrderState = (props) => {
  const orderInitial = [];
  const [order, setOrder] = useState(orderInitial);
  const [cart, setCart] = useState(orderInitial);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadin, setIsLoadin] = useState(false);
  //method to fetch all order
  const getOrder = async () => {
    const response = await fetch(
      "https://trendytonebackend.onrender.com/api/order/fetchallorder",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
      }
    );
    setIsLoading(false); 
    const json = await response.json();
    setOrder(json);
  };
  //method to add all orders
  const addOrder = async (title , primary_colour , secondary_colour,sleeve,collar,titletoshow,position ,size)=>{
    
    setIsLoadin(true);
    const response = await fetch("https://trendytonebackend.onrender.com/api/order/addorder",{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "auth-token":localStorage.getItem('token')
        },
        body:JSON.stringify({title,primary_colour,secondary_colour,sleeve,collar,titletoshow,position ,size})
    });
    
    setIsLoadin(false);
    const orders = await response.json();
    setOrder(order.concat(orders))
}


const getcart = async () => {
    const response = await fetch(
      "https://trendytonebackend.onrender.com/api/order/fetchallcart",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
      }
    );
    setIsLoading(false); 
    const json = await response.json();
    setCart(json);
  };
  //method to add all orders
  const addCart = async (title , primary_colour , secondary_colour,sleeve,collar,titletoshow,position ,size)=>{
    
    setIsLoadin(true);
    const response = await fetch("https://trendytonebackend.onrender.com/api/order/addcart",{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "auth-token":localStorage.getItem('token')
        },
        body:JSON.stringify({title,primary_colour,secondary_colour,sleeve,collar,titletoshow,position ,size})
    });
    
    setIsLoadin(false);
    const carts = await response.json();
    setCart(cart.concat(carts))
}

  return (
    <OrderContext.Provider value={{ order, setOrder, getOrder,addOrder,cart,setCart,getcart,addCart,isLoading ,isLoadin}}>
      {props.children}
    </OrderContext.Provider>
  );

  
};

export default OrderState;




