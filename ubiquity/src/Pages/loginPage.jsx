import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS Files/loginPage.css";

const LoginPage =()=> {
  let [user, setUser] = useState({})
  let navigate = useNavigate()
  const inputHandler = (e)=>{
    let name = e.target.name
    let value = e.target.value
    setUser({...user, [name]:value})
    console.log(value)
  }

  const submitHandler = async(e)=>{
    try {
        e.preventDefault()
        let formData =  new FormData()
        formData.append('email', user.email)
        formData.append('password', user.password)
        let resp = await Axios.post('http://localhost:4000/login', formData, {
          headers: {"Content-Type": "application/json"}
        })
        console.log(resp)
        console.log(formData)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div >
      <section
        class="h-100 h-auto gradient-form"
        style={{backgroundImage:
          "-webkit-gradient(linear,left top,right top,from(#fc4a1a),to(#f7b733))", paddingBottom:"200px"}}
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

                      <form action="/" method="POST" encType="multipart/form-data">
                        <p>Please login to your account</p>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Phone number or email address"
                            value={user.email}
                            onChange={inputHandler}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                            placeholder="Password"
                            value={user.password}
                            onChange={inputHandler}
                          />
                          {/* <label class="form-label" for="form2Example22">
                            Password
                          </label> */}
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 pe-4 ps-4 pt-2 pb-2"
                            type="button"
                            onClick={submitHandler}
                          >
                            Log in
                          </button>
                          <br />
                          <a class="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <Link to={'/register'} type="button" class="btn btn-outline-danger">
                            Create new Account
                          </Link> 
                        </div>
                      </form>
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
}

export default LoginPage;
