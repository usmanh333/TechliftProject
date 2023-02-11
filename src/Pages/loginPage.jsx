import React from "react";
import "../CSS Files/loginPage.css"
import Footer from "../Components/Footer";

function loginPage() {
  return (
    <div>
      <section class="h-100 gradient-form bottomS" style={{backgroundColor: "#eee"}}>
        <div class="container py-5 h-100 l">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img
                          src= {require("../images/loginImg.png")}
                          style= {{width: "185px", backgroundColor: "aliceblue"}}
                          alt="logo"
                        />
                        <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Phone number or email address"
                          />
                          {/* <label class="form-label" for="form2Example11">
                            Username
                          </label> */}
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                            placeholder="Password"
                          />
                          {/* <label class="form-label" for="form2Example22">
                            Password
                          </label> */}
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 pt-4 pb-4"
                            type="button"
                          >
                            Log in
                          </button>
                          <a class="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <button type="button" class="btn btn-outline-danger">
                            Create new Account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">We are more than just a company</h4>
                      <p class="small mb-0">
                      Perfection is Achieved Not When There Is Nothing More to Add, But When There Is Nothing Left to Take Away
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

    
  );
}

export default loginPage;
