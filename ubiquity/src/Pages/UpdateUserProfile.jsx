import React, { useEffect, useState } from "react";
import "../CSS Files/profile.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie"; // seting token in cookie
import * as Yup from "yup";

const UpdateUserProfile = () => {
    let { id } = useParams();
    let navigate = useNavigate()

// Validation by yup

const schema = Yup.object().shape({ 
  username: Yup.string().required("Enter your username"),
  phoneNumber: Yup.string().required("Enter your phone number"),
  email: Yup.string().required("Enter your Email address"),
  // password: Yup.string().required("Enter your password here to change your profile"),
  // retypePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Enter your Retype-password "),
});


    // Image state

  // const [getImage, setGetImage] = useState(null);

    // Input Handler State

    const [username, setUserame] = useState();
    const [number, setNumber] = useState();
    const [email, setEmail] = useState();
    // const [pass, setPass] = useState("");
    // const [retypePass, setRetypePass] = useState("");
    const [errors, setErrors] = useState({}); // for error messages
  
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
      const token = Cookies.get("token");
      let res = await axios.get(`http://localhost:4000/register/${id}`, {
        headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}` }, // Second Header verify the token
      });
      console.log(res.data);
        console.log(username)
        setUserame(res.data.username);
        setNumber(res.data.phoneNumber)
        setEmail(res.data.email)
        // setPass(res.data.password)
        // setRetypePass(res.data.retypePassword)
      //   setGetImage(card.getImage);
    } catch (error) {
      console.log(error);
    }
  };
  
  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      const updatedUser = {
        username:username,
        phoneNumber: number,
        email: email,
        // password: pass,
        // retypePassword: retypePass,
      };

      await schema.validate(updatedUser, { abortEarly: false }); // validating the fields by yup & abortEarly false means all filed errors will show if its true only one field error will show 
        const response = await axios.put(
          `http://localhost:4000/register/${id}`,
          updatedUser,{
            headers: { "Authorization": `Bearer ${token}` }, // Second Header verify the token
          }
        );
        // validation successful
      setErrors({}); // setting error if any 
        toast(`Profile Has been Updated Now`, {
            position: toast.POSITION.TOP_RIGHT,
          })
        console.log(response)
        navigate("/profile/");
    } catch (error) {
       // validation failed
  if (error instanceof Yup.ValidationError) { // if got error in validation  it itrate every filed and give error message
    const validationErrors = {};
    error.inner.forEach((err) => {
      validationErrors[err.path] = err.message; // err.path define the name filed in input type
    });
    setErrors(validationErrors); //setting errors if any from validation
  } else {
    console.error(error);
  }
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
              />{errors.username && <span className="error" style={{ color: "red", fontStyle: "italic" }}>{errors.username}</span>}<br/>
              <label>Number </label>
              <input className="form-control"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "5px",
                }}
                type="text"
                name="phoneNumber"
                onChange={(e)=>setNumber(e.target.value)}
                value={number}
              />{errors.phoneNumber && <span className="error" style={{ color: "red", fontStyle: "italic" }}>{errors.phoneNumber}</span>}<br/>
              <label>Email Address </label>
              <input className="form-control"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "5px",
                }}
                type="email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
              /><br/>{errors.email && <span className="error" style={{ color: "red", fontStyle: "italic" }}>{errors.email}</span>}
              {/* <label>Password </label>
              <input className="form-control"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "5px",
                }}
                type="password"
                name="password"
                onChange={(e)=>setPass(e.target.value)}
                // value={pass.slice(0,12)}
              />{errors.password && <p className="error" style={{ color: "red", fontStyle: "italic" }}>{errors.password}</p>}
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
                // value={retypePass.slice(0,12)}
              />{errors.retypePassword && <p className="error" style={{ color: "red", fontStyle: "italic" }}>{errors.retypePassword}</p>} */}
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
