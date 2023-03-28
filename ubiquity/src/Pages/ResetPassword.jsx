import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS Files/loginPage.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import Cookies from 'js-cookie';

const ResetPassword = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null); // Getting the errors if username or password is incorrect
  const initialValue = {
    email: "",
  };
  const loginValidation = yup.object({
    email: yup.string().required("The email is required"),
  });

  return (
    <div>
      <section
        class="h-100 h-auto gradient-form"
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
                        <img
                          src={"../images/loginImg.png"}
                          style={{
                            width: "185px",
                            backgroundColor: "aliceblue",
                          }}
                          alt="logo"
                        />
                        <h4 class="mt-1 mb-5 pb-1">We are The Ubiquity Team</h4>
                      </div>

                      <Formik
                        validationSchema={loginValidation}
                        initialValues={initialValue}
                        onSubmit={async (values, { setSubmitting }) => {
                          try {
                            let res = await Axios.post(
                              "http://localhost:4000/sendpasswordlink",
                              values
                            );
                            console.log(res.data.token)
                            let token = res.data.token
                            console.log(token);
                            // localStorage.setItem('secretKey',token,JSON.stringify(values)) //setting key and user in local storage
                            Cookies.set('verifytoken', token, { expires: 1 }); //verify token
                            if(res.status===201){
                                setMessage(true) // if get the response then the message displayed 
                            }else{
                                toast.error("Invalid User")
                            }
                            
                          } catch (error) {
                            console.error(error);
                            setError("Invalid email address"); // setting the state and displaying the error
                          }
                          console.log(values);
                          setSubmitting(false); // its a function coming from actions which is destructure above it can be actions.setSubmitting
                        }}
                      >
                        {({ isSubmitting }) => (
                          <Form>
                            <p>Please Enter Your Email Address </p>
                            {
                                message ? <span className="mb-2" style={{color: "green", fontWeight:"600"}}>Password Reset Link send to your Email address, Please Check your Email Inbox to Verify, Thanks.</span>: <></>
                            }<br/>

                            <div class="form-outline mb-4">
                              <Field
                                type="text"
                                id="form2Example11"
                                class="form-control"
                                placeholder="Enter Email"
                                name="email"
                              />
                              <span
                                style={{ color: "red", fontStyle: "italic" }}
                              >
                                <ErrorMessage name="email" />
                              </span>
                            </div>
                            <span style={{ color: "red", fontStyle: "italic" }}>
                              {error && <div>{error}</div>}
                              {/* Handling errors */}
                            </span>
                        
                            <div class="text-center pt-1 mb-5 pb-1">
                              <button
                                class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 pe-4 ps-4 pt-2 pb-2"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                Send
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>

                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">Already know the password?</p>
                        <Link
                          to={"/login"}
                          type="button"
                          class="btn btn-outline-danger"
                        >
                          Login now
                        </Link>
                      </div>
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
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
