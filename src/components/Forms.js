import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import orderContext from "../context/order/orderContext";
import { orderTitle1 } from "./Kids.js";
import { orderTitle2 } from "./Women.js";
import { orderTitle3 } from "./Men.js";


const Forms = (props) => { 
   
  let orderTitle="";
  if(orderTitle1==="" && orderTitle3==="" )
  {
   orderTitle=orderTitle2;
   
   
  }
  else if(orderTitle2===""  && orderTitle3==="") 
  {
   orderTitle=orderTitle1;
   
  }
  else  {
    orderTitle=orderTitle3;   
  }
  if(orderTitle==="")
  {
    orderTitle=orderTitle1; 
  }
  if(orderTitle==="")
  {
    orderTitle=orderTitle2; 
  }
  
  




 
 const [put,putset]= useState({a:1,b:1})
 let {a,b}=put;
  
  let navigate = useNavigate();
  const context = useContext(orderContext);
  const {isLoadin,addCart} = context;
  const [order, setOrder] = useState({ title:orderTitle, primary_colour:"",secondary_colour:"",sleeve:"",collar:"",titletoshow:"",position:""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCart(order.title , order.primary_colour , order.secondary_colour , order.sleeve , order.collar, order.titletoshow , order.position , order.size);
    props.showAlert(
      "Congrutulation order bought successfully payment details will be sent on email!HAPPY SHOPPING",
      "success"
    );
    navigate("/");
    await fetch(
      "https://trendytonebackend.onrender.com/api/order/sendemailafterorder",
      {
        method: "POST",
        headers: {
          "auth-token":localStorage.getItem('token'),
        }
      }
    )
    
  };
  





  const onChange = (e) => {
   
    setOrder({ ...order, [e.target.name]: e.target.value });
    
  };
  






  const onclick1 = () => {
     putset({a:1,b:1})
  }
  const onclick2 = () => {
    putset({a:1,b:2})
 }
 const onclick3 = () => {
  putset({a:1,b:3})
}
const onclick4 = () => {
  putset({a:1,b:4})
}
const onclick5 = () => {
  putset({a:1,b:5})
}
const onclick6 = () => {
  putset({a:1,b:b})
}
const onclick7 =() =>{
  putset({a:2,b:b})
}
const onclick8 =()=>{
  putset({a:3,b:b})
}
const onclick9 =()=>{
  putset({a:4,b:b})
}  
  return (
    <div>
      <div style={{textAlign:"center"}}><h3><strong>{orderTitle}</strong></h3></div>
      <div  ><img className="card-img-top" src={require(`./images/${orderTitle}/${a}/${b}.jpg`)} alt="hello" id="img" style={{height:310}} ></img></div>
      <form onSubmit={handleSubmit}>
        <strong>Primary Colour</strong>
        <div className="row my-2">
          <div className=" form-check col-md-2 ">           
            <input
              className="form-check-input"
              type="radio"
              name="primary_colour"
              id="white1" 
              value="white" onChange={onChange} onClick={onclick1} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              white
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="primary_colour"
              id="blue"
              value="blue" onChange={onChange} onClick={onclick2} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              blue
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="primary_colour"
              id="orange"
              value="orange" onChange={onChange} onClick={onclick3} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              orange
            </label>
          </div>
          <div className="form-check col-md-2">
            <input
              className="form-check-input"
              type="radio"
              name="primary_colour"
              id="green"
              value="green" onChange={onChange} onClick={onclick4} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              green
            </label>
          </div>
          <div className="form-check col-md-2">
            <input
              className="form-check-input"
              type="radio"
              name="primary_colour"
              id="yellow"
              value="yellow" onChange={onChange} onClick={onclick5} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              yellow
            </label>
          </div>
        </div>
        <strong>Secondary Colour</strong>
        <div className="row my-2">
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="secondary_colour"
              id="white"
              value="white" onChange={onChange} onClick={onclick6} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              white
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="secondary_colour"
              id="blue"
              value="blue" onChange={onChange} onClick={onclick7} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              blue
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="secondary_colour"
              id="orange"
              value="orange" onChange={onChange} onClick={onclick8} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              orange
            </label>
          </div>
          <div className="form-check col-md-2">
            <input
              className="form-check-input"
              type="radio"
              name="secondary_colour"
              id="green"
              value="green" onChange={onChange} onClick={onclick9} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              green
            </label>
          </div>
        </div>
        <strong>Sleeve</strong>
        <div className="row my-2">
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="sleeve"
              id="short"
              value="short" onChange={onChange} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             short
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="sleeve"
              id="bell"
              value="bell" onChange={onChange} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              bell
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="sleeve"
              id="full"
              value="full" onChange={onChange} required
            /> 
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              full
            </label>
          </div>
        </div>
        <strong>Collar</strong>
        <div className="row my-2">
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="collar"
              id="shawl"
              value="shawl" onChange={onChange} required
            /> 
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             Shawl
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="collar"
              id="peterpan"
              value="peterpan" onChange={onChange} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Peter pan
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="collar"
              id="v-necline"
              value="v-neckline" onChange={onChange} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              v-neckline
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <strong>Add title to preview</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="titletoshow"
            onChange={onChange}
            minlength={5}
            aria-describedby="emailHelp" style={{width:250}}
          />
        </div>
        <strong>Postion of added item</strong>
        <div className="row my-2">
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="position"
              id="Fronttop"
              value="fronttop" onChange={onChange} required
            /> 
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             Front-top
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="position"
              id="Frontmiddle"
              value="frontmiddle" onChange={onChange} reqiured
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
            Front-middle
            </label>
          </div>
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="position"
              id="Frontlast"
              value="frontlast" onChange={onChange} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             Front-last
            </label>
          </div>
        </div>
        <strong>Size</strong>
        <div className="row my-2">
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="size"
              id="sm"
              value="sm" onChange={onChange} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             Sm
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="size"
              id="lg"
              value="lg" onChange={onChange} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
            Lg
            </label>
          </div>
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="size"
              id="xl" 
              value="xl" onChange={onChange} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             XL
            </label>
          </div>
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="size"
              id="xxl"
              value="xxl" onChange={onChange} required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             XXL
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary">
          ADD TO CART
        </button>
      </form>
      <div>
      {isLoadin ? <div>Loading...</div> : <div></div>}
    </div>
    </div>
  );
};

export default Forms;
