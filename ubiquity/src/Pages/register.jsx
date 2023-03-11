import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS Files/Register.css";
import Axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const Register = () => {
  let navigate = useNavigate();
  // initialState
  const initialValue = {
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    retypePassword: "",
  };

  // Validation Schema
  const registerValidation = yup.object({
    username: yup
      .string()
      .min(5, "The username must contains more than 5 characters")
      .max(20, "The password must not be more than 20 characters long")
      .required("The username is required...!!!"),
    email: yup.string().required("The email is required"),
    phoneNumber: yup.number().required("The phone number is required"),
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
                        validationSchema={registerValidation}
                        initialValues={initialValue}
                        onSubmit={async (values) => {
                          try {
                            await Axios.post(
                              "http://localhost:4000/register",
                              values,
                              {
                                headers: { "Content-Type": "application/json" },
                              }
                            );
                            console.log(values)
                            navigate("/login");
                            window.scrollTo(0, 0);
                          } catch (error) {
                            console.error(error);
                          }
                        }}
                      >
                        <Form>
                          <p>Please login to your account</p>

                          <div class="form-outline mb-4">
                            <Field
                              type="text"
                              id="form2Example11"
                              class="form-control"
                              placeholder="Enter Username"
                              name="username"
                            />
                            <span style={{ color: "red", fontStyle: "italic" }}>
                            <ErrorMessage name="username" /> {/* Handling Errors */}
                            </span>
                          </div>
                          <div class="form-outline mb-4">
                            <Field
                              type="email"
                              id="form2Example12"
                              class="form-control"
                              placeholder="Enter Email Address"
                              name="email"
                            />
                            <span style={{ color: "red", fontStyle: "italic" }}>
                            <ErrorMessage name="email" />
                            </span>
                          </div>
                          <div class="form-outline mb-4">
                            <Field
                              type="number"
                              id="form2Example13"
                              class="form-control"
                              placeholder="Enter Phone number"
                              name="phoneNumber"
                            />
                            <span style={{ color: "red", fontStyle: "italic" }}>
                            <ErrorMessage name="phoneNumber" />
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
                            <span style={{ color: "red", fontStyle: "italic" }}>
                            <ErrorMessage name="password" />
                            </span>
                          </div>
                          <div class="form-outline mb-4">
                            <Field
                              type="password"
                              id="form2Example23"
                              class="form-control"
                              placeholder="Re-type Password"
                              name="retypePassword"
                            />
                            <span style={{ color: "red", fontStyle: "italic" }}>
                            <ErrorMessage name="retypePassword" />
                            </span>
                          </div>

                          <div class="text-center pt-1 mb-5 pb-1">
                            <button
                              class="btn btn-primary  fa-lg gradient-custom-2 pe-4 ps-4 pt-2 pb-2"
                              type="submit"
                            >
                              Register Now
                            </button>
                          </div>

                          <div class="d-flex align-items-center justify-content-center pb-4">
                            <p class="mb-0 me-2">Already have Account?</p>
                            <Link
                              to={"/login"}
                              type="button"
                              class="btn btn-outline-danger"
                            >
                              Login Now
                            </Link>
                          </div>
                        </Form>
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

export default Register;
