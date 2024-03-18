import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("hello")
    setIsLoading(true);
    const response = await fetch(
      "https://trendytonebackend.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    setIsLoading(false);
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      props.showAlert("login successfull ", "success");
      navigate("/");
    } else {
      props.showAlert(
        "invalid details or not created account yet go on signup page",
        "danger"
      );
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>{isLoading ? <div>Loading...</div> : <div></div>}</div>
      <form onSubmit={handleSubmit}>
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
            onChange={onChange}
            required
            style={{ maxWidth: 900 }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            id="password"
            onChange={onChange}
            required
            style={{ maxWidth: 900 }}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <div style={{ padding: 5 }}></div>
      </form>
      <button type="submit" className="btn btn-primary">
        <Link
          className={"nav-link active"}
          aria-current="page"
          to="/forgotpassword"
        >
          Forgot Password
        </Link>
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Login;
