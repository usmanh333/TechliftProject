import React from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "./loginPage";
import Cookies from 'js-cookie';

const ProtectedRoute = () => {
  let auth = Cookies.get('token');
  return auth ? <Outlet/> : <> <LoginPage/> </> // Using Outlet for protecting the routes and redirecting it to the login page
};

export default ProtectedRoute; 