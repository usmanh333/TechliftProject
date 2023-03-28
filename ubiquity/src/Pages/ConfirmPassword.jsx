import React , {useEffect, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../CSS Files/Register.css";
import Axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { toast } from 'react-toastify';
import axios from "axios";
import Cookies from "js-cookie"; // seting token in cookie

const ConfirmPassword = () => {
  let [message, setMessage] = useState('')
  let {id, token} = useParams()
//   let user = useParams()
//   console.log(user)
  let navigate = useNavigate();
  // initialState 
  const initialValue = {
    password: "",
    retypePassword: "",
  };

  // Validation Schema
  const registerValidation = yup.object({
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,  // regex for strong password 
        "Enter Strong Password \n Password must contains 8 characters length \n,  1 Upper Case, 1 Special Character (!@#$&*), 2 numerals (0-9) and some letters in Lower Case"
      )
      .required("The password field is required"),
    retypePassword: yup
      .string()
      .required("The Repeat password field is required")
      .oneOf([yup.ref("password"), null], "Both passwords must be matched"), // to match both Password fields
  });

  const verifyToken = Cookies.get("verifytoken"); //  get the token from cookies
    const header = {
      headers: { Authorization: `Bearer ${verifyToken}` }, // matching headers with frontend and token also
    };

  const validUser= async()=>{
    let resp = await axios.get(`http://localhost:4000/resetpassword/${id}/${token}`, header)
    console.log(resp)
    if(resp){
        console.log("valid user")
    }else{
        navigate('*')
    }
  }
useEffect(()=>{
    validUser()
},[])
  return (
    <div>
      <section
        class="h-100 gradient-form bottomS"
        style={{
          backgroundImage:
            "-webkit-gradient(linear,left top,right top,from(#fc4a1a),to(#f7b733))",
          paddingBottom: "200px",
        }}
      >
        <div class="container py-5 h-100 l">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        {/* <img
                          src={"../images/loginImg.png"}
                          style={{
                            width: "185px",
                            backgroundColor: "aliceblue",
                          }}
                          alt="logo"
                        /> */}
                        <h4 class="mt-1 mb-5 pb-1">We are The Ubiquity Team</h4>
                      </div>
                      <Formik
                        validationSchema={registerValidation}
                        initialValues={initialValue}
                        onSubmit={async (values, { setErrors }) => {
                          try {
                            let res = await Axios.post(
                              `http://localhost:4000/resetpassword/${id}/${token}`,
                              values,header
                            );
                            console.log(res)
                            
                            // console.log(res.data.status)
                            // console.log(res.data.error)
                            if(res.status===201){
                                setMessage(true)
                            }else{
                                toast.error("Token Expired")
                            }
                            
                          } catch (error) {
                            console.error(error);                          
                          }
                        }}                        
                      >
                        {({ errors }) => (
                        <Form>
                          <p>Please enter new password to reset your account</p>
                          {
                                message ? <span className="mb-2" style={{color: "green", fontWeight:"600"}}>Password has been reset now, Kindly login now from <Link to={'/login'}>here</Link></span>: <></>
                            }<br/>
                          <div class="form-outline mb-4">
                            <Field
                              type="password"
                              id="form2Example22"
                              class="form-control"
                              placeholder="Enter New Password"
                              name="password"
                            />
                            <span style={{ color: "red", fontStyle: "italic" }}>
                            <ErrorMessage name="password" />
                            </span>
                          </div>
                          <div class="form-outline mb-4">
                            <Field
                              type="password"
                              id="form2Example23"
                              class="form-control"
                              placeholder="Re-type New Password"
                              name="retypePassword"
                            />
                            <span style={{ color: "red", fontStyle: "italic" }}>
                            <ErrorMessage name="retypePassword" />
                            </span>
                          </div>
                          {/* <span style={{ color: "red", fontStyle: "italic" }}>
                              {errors.general && <div>{errors.general}</div>}{" "} */}
                              {/* Handling errors */}
                            {/* </span> */}
                          <div class="text-center pt-1 mb-5 pb-1">
                            <button
                              class="btn btn-primary  fa-lg gradient-custom-2 pe-4 ps-4 pt-2 pb-2"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">We are more than just a company</h4>
                      <p class="small mb-0">
                        Perfection is Achieved Not When There Is Nothing More to
                        Add, But When There Is Nothing Left to Take Away
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConfirmPassword