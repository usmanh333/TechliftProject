import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
// Navigation bar Starts from here 
    <nav className="navbar navbar-expand-lg bg-dark text-light ps-5 pe-5 ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={'../images/logo000.png'} alt="Logo" style={{width:"150px",height:"50px"}} />
        </Link>
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item text-light">
              <Link to="/" className="nav-link text-light active" aria-current="page" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-light">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to=""
                className="nav-link dropdown-toggle text-light"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu bg-dark">
                <li>
                  <Link to="/services" className="dropdown-item text-light bg-dark">
                        Services By Categories
                  </Link>
                </li> 
                <li>
                  
                </li>
                <li>
                  <Link to="/allServices" className="dropdown-item text-light bg-dark">
                        View All Services
                  </Link>
                </li>
              </ul>
              
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-light">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link text-light">
                Register
              </Link>
            </li>
            
            </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
// Navigation bar Starts from here 

  );
}

export default NavBar;
