import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Home";

const ProtectedRoute = () => {
  let auth = localStorage.getItem('secretKey');
  return auth ? <Outlet/> : <> <Home/> </> // Using Outlet for protecting the routes
};

export default ProtectedRoute;