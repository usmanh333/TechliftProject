import React from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "./loginPage";

const ProtectedRoute = () => {
  let auth = localStorage.getItem('secretKey');
  return auth ? <Outlet/> : <> <LoginPage/> </> // Using Outlet for protecting the routes and redirecting it to the login page
};

export default ProtectedRoute;