import React from "react";
import "../CSS Files/UserReview.css";

function UsersReview() {
  return (
    <div className="reviewSection pb-5">
        <hr />
         {/*  */}
      <div class="custom-shape-divider-top-1676118646">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="headingFour">What Users Say?</div>
      <hr />
      <div className="commentBoxSection">
        <div class="container new">
          <div class="row">
            <div class="col-lg-3 mt-3">
              <div class="card d-flex mx-auto">
                <div class="card-image">
                  <img alt="image1"
                    class="img-fluid d-flex mx-auto"
                    src="https://i.imgur.com/3TlwnLF.jpg"
                  />
                </div>
                <div class="card-text">
                  <div class="card-title">Lorem Ipsum!</div>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc,
                  blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas
                  nec odio et ante tincidunt tempus Duis leo. Donec sodales
                  sagittis magna
                </div>
                <div class="footer">
                  <span id="name">
                    Micheal Smith
                    <br />
                  </span>
                  <span id="position">
                    CEO of <a href="#">Google.com</a>
                  </span>
                </div>
              </div>
            </div>
            <div class=" col-lg-3 mt-3">
              <div class="card d-flex mx-auto">
                <div class="card-image">
                  <img alt="image2"
                    class="img-fluid d-flex mx-auto"
                    src="https://i.imgur.com/Uz4FjGZ.jpg"
                  />
                </div>
                <div class="card-text">
                  <div class="card-title">Lorem Ipsum!</div>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc,
                  blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas
                  nec odio et ante tincidunt tempus Duis leo. Donec sodales
                  sagittis magna
                </div>
                <div class="footer">
                  <span id="name">
                    Angellia Miller
                    <br />
                  </span>
                  <span id="position">
                    CEO of <a href="#">Facebook.com</a>
                  </span>
                </div>
              </div>
            </div>
            <div class=" col-lg-3 mt-3">
              <div class="card d-flex mx-auto ">
                <div class="card-image">
                  <img alt="image3"
                    class="img-fluid d-flex mx-auto"
                    src="https://i.imgur.com/udGH5tO.jpg"
                  />
                </div>
                <div class="card-text">
                  <div class="card-title">Lorem Ipsum!</div>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc,
                  blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas
                  nec odio et ante tincidunt tempus Duis leo. Donec sodales
                  sagittis magna
                </div>
                <div class="footer">
                  <span id="name">
                    Christina Williams
                    <br />
                  </span>
                  <span id="position">
                    UX Designer at <a href="#">Youtube.com</a>
                  </span>
                </div>
              </div>
            </div>
            <div class=" col-lg-3 mt-3">
              <div class="card d-flex mx-auto ">
                <div class="card-image">
                  <img alt="image4"
                    class="img-fluid d-flex mx-auto"
                    src="https://i.imgur.com/udGH5tO.jpg"
                  />
                </div>
                <div class="card-text">
                  <div class="card-title">Lorem Ipsum!</div>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc,
                  blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas
                  nec odio et ante tincidunt tempus Duis leo. Donec sodales
                  sagittis magna
                </div>
                <div class="footer">
                  <span id="name">
                    Christina Williams
                    <br />
                  </span>
                  <span id="position">
                    UX Designer at <a href="#">Youtube.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Another Section */}
      
      <div
        class="container-fluid mx-auto mt-5 mb-5 col-12"
        style={{textAlign: "center"}}
      >
        <hr />
        <div class="hd">Why People Believe in Us</div>
        <p>
          <small class="">
            Always render more and better service than <br />
            is expected of you, no matter what your ask may be.
          </small>
        </p>
        <div class="row mt-5" style={{justifyContent: "center"}}>
            <div class="card  col-lg-3 mt-3 col-12 me-4">
                <div class="card-content">
                <div class="card-body">
                    {" "}
                    <img alt="image5" class="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div class="shadow"></div>
                    <div class="card-title"> We're Free </div>
                    <div class="card-subtitle">
                    <p>
                        {" "}
                        <small class="text-muted">
                        We spent thousands of hours creating on algorithm that
                        does this for you in seconds. We collect a small fee from
                        the professional after they meet your
                        </small>{" "}
                    </p>
                    </div>
                </div>
                </div>
            </div>

          <div class="card  col-lg-3 mt-3 col-12  me-4 ">
            <div class="card-content">
              <div class="card-body">
                {" "}
                <img alt="image6" class="img" src="https://i.imgur.com/xUWJuHB.png" />
                <div class="card-title"> We're Unbiased </div>
                <div class="card-subtitle">
                  <p>
                    {" "}
                    <small class="text-muted">
                      {" "}
                      We don't accept ads from anyone. We use actual data to
                      match you who the best person for each job{" "}
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card  col-lg-3 mt-3 col-12  me-4">
            <div class="card-content">
              <div class="card-body">
                {" "}
                <img alt="image7" class="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                <div class="card-title"> We Guide you </div>
                <div class="card-subtitle">
                  <p>
                    {" "}
                    <small class="text-muted">
                      Buying or selling a home is often the largest transaction
                      anyone does in their life. we guide you through the
                      process so that you can be confident in reaching your
                      dream outcome.
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ft">
          <p class="chk">
            <small class="">Still not sure?</small>
          </p>
          <div class="btn btn-primary">Give it a Try</div>
        </div>
      </div>
    </div>
  );
}

export default UsersReview;
