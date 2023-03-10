import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = ({loggedIn, setLoggedIn}) => {
  // const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    let auth = localStorage.getItem("secretKey"); // giving authorization to user by getting the key 
    if (auth) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  const handleLogout = () => {
    // Clear local storage and set loggedIn to false
    localStorage.clear();
    setLoggedIn(false);
  };
  
  return (
    // Navigation bar Starts from here
    <nav className="navbar navbar-expand-lg bg-dark text-light ps-5 pe-5 ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={"../images/logo000.png"}
            alt="Logo"
            style={{ width: "150px", height: "50px" }}
          />
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
              <NavLink
                to="/"
                className="nav-link text-light"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle text-light"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu bg-dark">
                <li>
                  <NavLink
                    to="/services"
                    className="dropdown-item text-light bg-dark"
                  >
                    Services By Categories
                  </NavLink>
                </li>
                <li></li>
                <li>
                  <NavLink
                    to="/servicesAll"
                    className="dropdown-item text-light bg-dark"
                  >
                    View All Services
                  </NavLink>
                </li>
                {loggedIn && (
                  <li>
                    <NavLink
                      to="/postAService"
                      className="dropdown-item text-light bg-dark"
                    >
                      Post A Service
                    </NavLink>
                  </li>
                )}
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-light">
                About
              </NavLink>
            </li>
            {/*  Conditionally rendering if the user login show logount button else show login register   */}
            {!loggedIn && (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link text-light">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link text-light">
                    Register
                  </NavLink>
                </li>
              </>
            )}
            {loggedIn && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className="nav-link text-light"
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className="nav-link text-light"
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
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
