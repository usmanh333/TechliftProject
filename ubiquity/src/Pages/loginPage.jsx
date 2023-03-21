import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS Files/loginPage.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { toast, ToastContainer } from 'react-toastify';


const LoginPage = ({ setLoggedIn }) => {
  const [error, setError] = useState(null); // Getting the errors if username or password is incorrect
  let navigate = useNavigate();
  const initialValue = {
    email: "",
    password: "",
  };
  const loginValidation = yup.object({
    email: yup.string().required("The email is required"),
    password: yup.string().required("The password is required"),
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
                              "http://localhost:4000/login",
                              values
                            );
                            navigate("/servicesAll");
                            localStorage.setItem('secretKey',JSON.stringify(values)) //setting key and user in local storage
                            setLoggedIn(true); // update the loggedIn state variable
                            {res ? (toast(`${res.data.status}`, {
                              position: toast.POSITION.TOP_RIGHT
                            }))
                          :
                          (toast(`${error}`, {
                            position: toast.POSITION.TOP_RIGHT
                          }))
                          }
                            console.log(res.data.status)
                            console.log(res.data)
                          } catch (error) {
                            console.error(error);
                            setError("Invalid email address or password");  // setting the state and displaying the error
                          }
                          console.log(values);
                          setSubmitting(false); // its a function coming from actions which is destructure above it can be actions.setSubmitting
                        }}
                      >
                        {({ isSubmitting }) => (
                          <Form>
                            <p>Please login to your account</p>

                            <div class="form-outline mb-4">
                              <Field
                                type="text"
                                id="form2Example11"
                                class="form-control"
                                placeholder="Phone number or email address"
                                name="email"
                              />
                              <span
                                style={{ color: "red", fontStyle: "italic" }}
                              >
                                <ErrorMessage name="email" />
                              </span>
                            </div>

                            <div class="form-outline mb-4">
                              <Field
                                type="password"
                                id="form2Example22"
                                class="form-control"
                                placeholder="Password"
                                name="password"
                              />
                              <span
                                style={{ color: "red", fontStyle: "italic" }}
                              >
                                <ErrorMessage name="password" />
                              </span>
                            </div>
                            <span style={{ color: "red", fontStyle: "italic" }}>
                              {error && <div>{error}</div>}{" "}
                              {/* Handling errors */}
                            </span>
                            <br />
                            <div class="text-center pt-1 mb-5 pb-1">
                              <button
                                class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 pe-4 ps-4 pt-2 pb-2"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                Log in
                              </button>

                              <br />
                              <a class="text-muted" href="#">
                                Forgot password?
                              </a>
                            </div>
                          </Form>
                        )
                      }
                      </Formik>

                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">Don't have an account?</p>
                        <Link
                          to={"/register"}
                          type="button"
                          class="btn btn-outline-danger"
                          >
                          Create new Account
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
      <ToastContainer/>
    </div>
  );
};

export default LoginPage;
