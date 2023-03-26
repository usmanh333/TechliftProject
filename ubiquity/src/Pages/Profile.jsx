import React, { useEffect, useState } from "react";
import "../CSS Files/profile.css";
import axios from "axios";
import Cookies from "js-cookie"; // seting token in cookie
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {
  const [userData, setUserData] = useState({});
  const [ID, setID] = useState([]);
 
  const fetchUserProfile = async () => {
    const token = Cookies.get("token"); //  get the token from cookies
    const header = {
      headers: { Authorization: `Bearer ${token}` }, // matching headers with frontend and token also
    };
    try {
      const response = await axios.get("http://localhost:4000/profile", header); // getting login user details 
      console.log(response);
      setUserData(response.data);
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  const fetchUserID = async () => {
    try {
      const response = await axios.get("http://localhost:4000/register"); // Matching ID with the above API and getting more deatails of user
      setID(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  useEffect(() => {
    fetchUserProfile();
    fetchUserID();
  }, []);

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
          <h1 className="positionP">Profile</h1>
        <div className="profile-main">
          <div>
            <img src="../images/user2.jpg" className="image-fluid profile-image" alt="ImageHere" />
          </div>
          <div className="profile-content">
            <p><strong>Email :</strong> {userData.email} </p>
            {ID.length > 0 &&
              ID.map((val) => {
                return val._id === userData.id ?
                <>
                  <p key={val._id}><strong>Username :</strong> {val.username}</p>
                  <p key={val._id}><strong>Joined At :</strong> {new Date(val.createdAt).toLocaleDateString()}</p>
                  <p key={val._id}><strong>UserID :</strong> {val._id.substring(5, 10)}</p>
                  <p key={val._id}><strong>Number :</strong> {String(val.phoneNumber).startsWith('9') ? '+' + val.phoneNumber : String(val.phoneNumber).startsWith('3') ? '+92-' + val.phoneNumber : val.phoneNumber}</p>
                  <button className="btn" style={{backgroundColor: "orange"}}><Link to={`/updateProfile/${val._id}`}>Update Profile</Link></button>
                </>
                : <></>;
              })}
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default Profile;
