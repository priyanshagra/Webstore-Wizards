import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Forgot = (props) => {
  const [isLoading, setIsLoading] = useState(false);
    const [credentials, setCredentials] = useState({ email:"" });
    let navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      const response = await fetch(
        "https://trendytonebackend.onrender.com/api/auth/sendemailforgot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email
          }),
        }
      )
      
      setIsLoading(false);
      const json = await response.json();
       if (json.success)
       {
        
        props.showAlert("message sent successfully ", "success");
        navigate("/login");
       
       }
        else
        {
          
          props.showAlert("try sending message again ", "danger");

        }
        
      
    };
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };




  return (
    <div>
       <div>{isLoading ? <div>Loading...</div> : <div></div>}</div>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <strong>Email address</strong>
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            required
            onChange={onChange}
            style={{ maxWidth: 900 }}
          />
          <div id="emailHelp" className="form-text">
            On this email we will send method how to reset your password
          </div>
        </div>
        <div >
        <button type="submit" className="btn btn-primary"  >
         Get Email
        </button>
        </div>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Forgot;
