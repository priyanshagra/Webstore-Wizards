import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import {gapi} from "gapi-script";

const Signup1 = (props) => {
  const [isLoading, setIsLoading] = useState(false);
    const [credentials, setCredentials] = useState({ email: ""});
    let navigate = useNavigate();
    useEffect(()=>{
      gapi.load("client:auth2",()=>{
        gapi.auth2.init({clientId:"504611249331-3l8vq2l7k662aof3rllqu4ldeo9cr535.apps.googleusercontent.com"})
      })
    },[])
    const responseGoogle = async (response)=> 
      {
         const response1=await fetch("https://trendytonebackend.onrender.com/api/auth/createusergoogle",{
           method:"POST",
            headers:{
               "Content-Type":"application/json"
         },
           body: JSON.stringify({name:response.profileObj.name,email:response.profileObj.email})
       });
       const json = await response1.json();
       console.log(json);
       if(json.success)
       {
         localStorage.setItem('token',json.authtoken);
         props.showAlert("Google signup successfull","success");
         navigate("/");
       }
       else
       {
         props.showAlert("Goggle signup unsuccessfull","danger");
       }
  } 
  const failure=(error)=>{
    console.log(error);
  }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      const response = await fetch(
        "https://trendytonebackend.onrender.com/api/auth/sendotp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email : credentials.email
          }),
        }
      )
      setIsLoading(false);
      const json = await response.json();
       if (json.success)
       {
        props.showAlert("otp sent successfully ", "success");
        navigate("/getotp");
       }
        else
        {
          props.showAlert("try sending otp again ", "danger");
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
            Add a valid email where we can send otp
          </div>
        </div>
        <div >
        <button type="submit" className="btn btn-primary"  >
         Get Email
        </button>
        </div>
        <div style={{padding:5}}>
        <GoogleLogin
              clientId="504611249331-3l8vq2l7k662aof3rllqu4ldeo9cr535.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseGoogle}
              onFailure={failure}
              cookiePolicy={"single_host_origin"}
              
            /></div>
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

export default Signup1;
