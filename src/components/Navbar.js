import React, { useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import fashion from "./images/fashion.jpg";


  const Navbar = (props) => {
    let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        backgroundImage: `url(${fashion})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 1550,
        height: 180,
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            position: "absolute",
            left: 500,
            top: 0,
            fontFamily: "cursive",
            fontSize: 100,
          }}
        ></Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ position: "absolute", top: 0 }}>
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li
              className="nav-item"
              style={{ position: "absolute", top: 0, left: 80 }}
            >
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ position: "absolute", top: 0, left: 160 }}
            >
              <Link
                className={`nav-link ${
                  location.pathname === "/faq" ? "active" : ""
                }`}
                to="/faq"
              >
                FAQ
              </Link>
            </li>
          </ul>
          <li
            className="d-flex mx-2"
            style={{ position: "absolute", bottom: 0, left: 80 }}
          >
            <Link className="nav-link active " to="/yourorder">
              <i className="fa-solid fa-cart-shopping">ORDERS</i>
            </Link>
          </li>

          <li
            className="d-flex mx-2"
            style={{ position: "absolute", bottom: 0 }}
          >
            <Link className="nav-link active" to="/yourcart">
              <i className="fa-solid fa-user">CART</i>
            </Link>
          </li>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link
                className="btn btn-primary mx-1"
                to="/login"
                role="button"
                style={{ position: "absolute", top: 0, right: 80 }}
              >
                Login
              </Link>
              <Link
                className="btn btn-primary mx-1"
                to="/emailforsignup"
                role="button"
                style={{ position: "absolute", top: 0, right: 0 }}
              >
                Signup
              </Link>
            </form>
          ) : (
            <button
              className="btn btn-primary"
              onClick={handleLogout}
              style={{ position: "absolute", top: 0, right: 0 }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );

}
export default Navbar;
