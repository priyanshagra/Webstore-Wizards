import { useContext, useState } from "react";
import OrderContext from "../context/order/orderContext";

const Orderitem = (props) => {
    
   const {orders} = props;
   const context = useContext(OrderContext);
   const [credentials, setCredentials] = useState({ comment: "" });
    const {addComment} = context;
   const [isLoading, setIsLoading] = useState(false);
   const handlesubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await addComment(credentials.comment);

  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      
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
        <form>
    <div className="form-group">
      <label htmlFor="disabledTextInput">ADD COMMENT</label>
      <input
        type="text"
        id="disabledTextInput"
        name="comment"
        className="form-control"
        placeholder="Disabled input"
        onChange={onChange}
      />
    </div>
    <button type="submit" className="btn btn-primary" onClick={handlesubmit}>
      Submit
    </button>
</form>
    </div>
    </div>
  )
}

export default Orderitem
