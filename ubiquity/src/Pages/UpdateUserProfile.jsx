import React, { useEffect, useState } from "react";
import "../CSS Files/profile.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUserProfile = () => {
    let { id } = useParams();
    let navigate = useNavigate()
    // Image state

  const [getImage, setGetImage] = useState(null);

    // Input Handler State

    const [username, setUserame] = useState();
    const [number, setNumber] = useState();
    const [pass, setPass] = useState("");
    const [retypePass, setRetypePass] = useState("");
  
    // image handler
    // const handleImage = async (e) => {
    //   setGetImage(e.target.files[0]);
    // };
    // const inputhandler = async (e) => {
    //     let value = e.target.value
    //     // setUserame(value)
    //     // setNumber(value)
    //     // setPass(value)
    //     // setRetypePass(value)
    // }

  //   Getting Data from BE
  const getUserDetail = async () => {
    try {
        let res = await axios.get(`http://localhost:4000/register/${id}`);
        console.log(res.data);
        console.log(username)
        setUserame(res.data.username);
        setNumber(res.data.phoneNumber)
        setPass(res.data.password)
        setRetypePass(res.data.retypePassword)
      //   setGetImage(card.getImage);
    } catch (error) {
      console.log(error);
    }
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = {
        username:username,
        phoneNumber: number,
        password: pass,
        retypePassword: retypePass,
      };
        const response = await axios.put(
          `http://localhost:4000/register/${id}`,
          updatedUser
        );
        toast(`Profile Has been Updated Now`, {
            position: toast.POSITION.TOP_RIGHT,
          })
        console.log(response)
        navigate("/profile/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserDetail();
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
        <h1 className="positionP">Update Profile</h1>
        <div className="profile-main">
          <form
            onSubmit={SubmitHandler}
            encType="multipart/form-data"
            method="POST"
          >
            <div className="profile-content">

               {/* <lable>Select Image</lable>
              <input
                style={{
                  border: "1px solid aliceblue",
                  borderRadius: "5px",
                  margin: "5px",
                }}
                type="file"
                name="image"
                onChange={handleImage}
              /><br/> */}
            
              <label>Username </label>
              <input className="form-control"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "5px",
                }}
                type="text"
                name="username"
                onChange={(e)=>setUserame(e.target.value)}
                value={username}
              /><br/>
              <label>Number </label>
              <input className="form-control"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "5px",
                }}
                type="text"
                name="number"
                onChange={(e)=>setNumber(e.target.value)}
                value={number}
              /><br/>
              <label>Password </label>
              <input className="form-control"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "5px",
                }}
                type="password"
                name="password"
                onChange={(e)=>setPass(e.target.value)}
                value={pass.slice(0,12)}
              />
              <label>Retype-Password </label>
              <input className="form-control mb-4"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "5px",
                }}
                type="password"
                name="retypePassword"
                onChange={(e)=>setRetypePass(e.target.value)}
                value={retypePass.slice(0,12)}
              />
              <button type="submit" class="btn btn-primary btn-block mb-4">
          Update Now
        </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUserProfile;
