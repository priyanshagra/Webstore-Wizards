import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  


  const [isLoading, setIsLoading] = useState(false);

  const [credentials,setCredentials]=useState({name:"",password:"",cpassword:""})
  let navigate = useNavigate();
  const handleSubmit=async (e)=>{
      e.preventDefault();
      setIsLoading(true);
      const {name,password}=credentials;
      const response=await fetch("https://trendytonebackend.onrender.com/api/auth/createuser",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify({name,password})
      });
      const json = await response.json();
      console.log(json);
      setIsLoading(false);
      if(json.success)
      {
        localStorage.setItem('token',json.authtoken);
        props.showAlert("account created successfull","success");
        navigate("/");
      }
      else
      {
        props.showAlert("invalid details","danger");
        navigate("/");
      }
  } 
  const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
  }

  return (
    <div>
    <div>
      {isLoading ? <div>Loading...</div> : <div></div>}
    </div>
    <div className="container">

      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <strong>Name</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="name" name="name" onChange={onChange} required  minLength={5}
            aria-describedby="emailHelp" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
          <strong>Password</strong>  
          </label>
          <input
            type="password"
            className="form-control"
            id="password" name="password" onChange={onChange} required minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
          <strong>Confirm Password</strong> 
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword" name="cpassword" onChange={onChange} required minLength={5}
          />
        </div>
        <div >
        <button type="submit" className="btn btn-primary" >
          Signup
        </button></div>
      </form>
    </div>
  </div>
  );
};

export default Signup;
