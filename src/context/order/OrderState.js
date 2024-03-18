import { useState } from "react";
import OrderContext from "./orderContext";


const OrderState = (props) => {
  const orderInitial = [];
  const [order, setOrder] = useState(orderInitial);
  const [cart, setCart] = useState(orderInitial);
  const [comment, setComment] = useState(orderInitial);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadin, setIsLoadin] = useState(false);
  //method to fetch all order
  const getOrder = async () => {
    const response = await fetch(
      "http://localhost:8000/api/order/fetchallorder",
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
    const response = await fetch("http://localhost:8000/api/order/addorder",{
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

const addComment = async (comments)=>{
    const response1 = await fetch('http://localhost:5000/analyze_sentiment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            comment:comments
          }),
        });
  
    const data = await response1.json();
    const sentiments=data.sentiment;
    const response = await fetch("http://localhost:8000/api/order/addcomment",{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "auth-token":localStorage.getItem('token')
        },
        body:JSON.stringify({comments,sentiments})
    });

    const data1=await response.json();

    setComment(comment.concat(data1));    
}



const getcomment = async () => {
    const response = await fetch(
      "http://localhost:8000/api/order/fetchallcomment",
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
    setComment(json);
  };

const getcart = async () => {
    const response = await fetch(
      "http://localhost:8000/api/order/fetchallcart",
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
    
    console.log("hello")
    setIsLoadin(true);
    const response = await fetch("http://localhost:8000/api/order/addcart",{
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
    <OrderContext.Provider value={{ order, setOrder, getOrder,addOrder,cart,setCart,getcart,addCart,isLoading ,isLoadin,addComment,comment,getcomment}}>
      {props.children}
    </OrderContext.Provider>
  );

};

export default OrderState;




