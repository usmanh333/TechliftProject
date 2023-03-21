import React, { useEffect, useState } from "react";
import '../CSS Files/profile.css'
import axios from 'axios'

const Profile = ({setLoggedIn}) => {
  const [user, setUser]= useState()

const loginUser = async (email, password) => {
  try {
    const response = await axios.get('http://localhost:4000/login', { email, password });
    console.log(response.data);
    // handle successful login here
  } catch (error) {
    console.error(error);
    // handle login error here
  }
};

  useEffect(()=>{
    loginUser()
  },[])
  
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage:
            "-webkit-gradient(linear,left top,right top,from(#fc4a1a),to(#f7b733))",
          paddingBottom: "200px",
        }}
      >
        <div className="profile-main">
        <h1>Profile</h1>
        <div>
          <img src="" className="image-fluid profile-image" alt="ImageHere" />
        </div>
        <div className="profile-content">
          <p>Username : </p>
          <p>Email : </p>
          <p>Joined At : </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
