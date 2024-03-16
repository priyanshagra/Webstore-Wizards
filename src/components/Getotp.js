import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Getotp = (props) => {
  const [isLoading, setIsLoading] = useState(false);
    const [credentials, setCredentials] = useState({ otp:"" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      const response = await fetch(
        "https://trendytonebackend.onrender.com/api/auth/getotp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            otp: credentials.otp
          }),
        }
      )
      setIsLoading(false);
      const json = await response.json();
       if (json.success)
       {
        props.showAlert("Otp is correct", "success");
        navigate("/signup");
       }
        else
        {
          props.showAlert("Otp is incorrect ", "danger");
          navigate("/emailforsignup")
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
            <strong>OTP</strong>
          </label>
          <input
            type="number"
            name="otp"
            className="form-control"
            id="otp"
            value={credentials.otp}
            aria-describedby="emailHelp"
            required
            onChange={onChange}
            style={{ maxWidth: 900 }}
          />
          <div id="emailHelp" className="form-text">
            Enter your otp here
          </div>
        </div>
        <div >
        <button type="submit" className="btn btn-primary"  >
         Submit otp
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

export default Getotp;
