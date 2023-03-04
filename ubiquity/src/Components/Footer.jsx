import React from "react";
import "../CSS Files/Footer.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div>
      <footer id="dk-footer" class="dk-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-4">
              <div class="dk-footer-box-info">
                <a href="index.html" class="footer-logo">
                  <img
                    src={"../images/logo000.png"}
                    alt="footer_logo"
                    class="img-fluid logo-footer"
                  />
                </a>
                <p class="footer-info-text">
                  "Perfection is Achieved Not When There Is Nothing More to Add,
                  But When There Is Nothing Left to Take Away"
                </p>
                <div class="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Social link --> */}
              </div>
              {/* <!-- End Footer info --> */}
              <div class="footer-awarad">
                <img src="images/icon/best.png" alt="" />
                <p>Best Design For Local Services</p>
              </div>
            </div>
            {/* <!-- End Col --> */}
            <div class="col-md-12 col-lg-8">
              <div class="row">
                <div class="col-md-6">
                  <div class="contact-us">
                    <div class="contact-icon">
                      <i class="fa fa-map-o" aria-hidden="true"></i>
                    </div>
                    {/* <!-- End contact Icon --> */}
                    <div class="contact-info">
                      <h3>Lahore, Pakistan</h3>
                      <p className="colorP">D-Block Hurbanspura</p>
                    </div>
                    {/* <!-- End Contact Info --> */}
                  </div>
                  {/* <!-- End Contact Us --> */}
                </div>
                {/* <!-- End Col --> */}
                <div class="col-md-6">
                  <div class="contact-us contact-us-last">
                    <div class="contact-icon">
                      <i
                        class="fa fa-volume-control-phone"
                        aria-hidden="true"
                      ></i>
                    </div>
                    {/* <!-- End contact Icon --> */}
                    <div class="contact-info">
                      <h3>+92 323 804 5354</h3>
                      <p className="colorP">Give us a call</p>
                    </div>
                    {/* <!-- End Contact Info --> */}
                  </div>
                  {/* <!-- End Contact Us --> */}
                </div>
                {/* <!-- End Col --> */}
              </div>
              {/* <!-- End Contact Row --> */}
              <div class="row">
                <div class="col-md-12 col-lg-6">
                  <div class="footer-widget footer-left-widget">
                    <div class="section-heading">
                      <h3>Useful Links</h3>
                      <span class="animate-border border-black"></span>
                    </div>
                    <ul>
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">View All Services</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Login</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Faq</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End Footer Widget --> */}
                </div>
                {/* <!-- End col --> */}
                <div class="col-md-12 col-lg-6">
                  <div class="footer-widget">
                    <div class="section-heading">
                      <h3>Subscribe</h3>
                      <span class="animate-border border-black"></span>
                    </div>
                    <p className="colorP">
                      {/* // <-- Don’t miss to subscribe to our new feeds, kindly fill the form below. --> */}
                      Reference site about Ubiquity, giving information on its
                      origins Home page, as well.
                    </p>
                    <form action="#">
                      <div class="form-row">
                        <div class="col dk-footer-form">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email Address"
                          />
                          <button type="submit">Subscribe</button>
                        </div>
                      </div>
                    </form>
                    {/* <!-- End form --> */}
                  </div>
                  {/* <!-- End footer widget --> */}
                </div>
                {/* <!-- End Col --> */}
              </div>
              {/* <!-- End Row --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Widget Row --> */}
        </div>
        {/* <!-- End Contact Container --> */}

        <div class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <span>Copyright © 2023, All Right Reserved Ubiquity-OSP</span>
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Row --> */}
          </div>
          {/* <!-- End Copyright Container --> */}
        </div>
        {/* <!-- End Copyright -->
        <!-- Back to top --> */}
        <div id="back-to-top" class="back-to-top">
          <button
            class="btn btn-dark"
            title="Back to Top"
            style={{ display: "block" }}
          >
            <i class="fa-solid fa-angle-up"></i>
          </button>
        </div>
        {/* <!-- End Back to top --> */}
      </footer>
    </div>
  );
}

export default Footer;
