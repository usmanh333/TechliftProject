import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../CSS Files/ServicesDetails.css";
import moment from "moment";

const ServicesDetails = () => {
  const [card, setCard] = useState({});
  let nevigate = useNavigate();
  const { id } = useParams();

  // Related Cards Navigation
  const Clicked = (url) => {
    nevigate(url);
    window.scrollTo(0, 0);
  };

  const getUserDetail = async () => {
    try {
      const res = await Axios.get(`http://localhost:4000/cardsdata/${id}`); // Getting Single User Details
      setCard(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const category = card.selectCategory; //saving the category here
  let sameId = card._id; //saving the ID here

  // Related Services
  const [showInput, setShowInput] = useState([]);
  const userClick = async () => {
    const result = await fetch("http://localhost:4000/cardsdata"); // getting data from database
    const user = await result.json();
    setShowInput(user);
  };

  let filteredServices = showInput.filter(
    (service) => service.selectCategory == category //filtering the category data first
  );
  let res = filteredServices.filter(
    (duplicateID) => duplicateID._id !== sameId
  ); //  then filtering the data by ID which is not same as displaying above

  useEffect(() => {
    userClick();
    getUserDetail();
  }, [showInput]);

  // getting data ends here

  return (
    <>
      <div
        style={{
          backgroundImage:
            "-webkit-gradient(linear,left top,right top,from(#fc4a1a),to(#f7b733))",
        }}
      >
        {/* <!-- Product section--> */}
        <div>
          <section className="py-5">
            <h1
              className="pb-4"
              style={{ textAlign: "center", fontWeight: "600" }}
            >
              Here you can see the Services details
            </h1>
            <div className="container px-4 px-lg-5 my-5">
              <div className="row gx-4 gx-lg-5 align-items-center">
                <hr />
                <div className="col-md-6">
                  <img
                    className="card-img-top mb-5 mb-md-0"
                    src={`http://localhost:4000/cardsdata/uploads/${card.image}`}
                    alt="Details Image"
                  />
                </div>
                <div className="col-md-6">
                  <div className="small mb-1 text-black">
                    <strong>Service Posted : </strong>
                    {moment(card.date).format("MMMM Do YYYY, h:mm:ss a")}
                  </div>
                  <div className="small mb-1 text-black">
                    <p>
                      <strong>Category : </strong>
                      {card.selectCategory}
                    </p>
                  </div>
                  <h1 className="display-5 fw-bolder">{card.name}</h1>
                  <div className="fs-5 mb-5">
                    <span className="">
                      <strong>Area :</strong> {card.selectDistrict},
                    </span>
                    <span>{card.selectArea}</span>
                  </div>
                  <p className="lead">
                    <span style={{ fontWeight: "700" }}>Description :</span>
                    {card.desc}
                  </p>
                  <p className="lead">
                    <span style={{ fontWeight: "700" }}>Price Rate :</span>
                    {card.price}
                  </p>
                  <p className="lead">
                    <span style={{ fontWeight: "700" }}>Phone Number :</span>
                    {card.number && card.number.toString().startsWith("9")
                      ? "+" + card.number
                      : card.number}
                  </p>
                  <div className="d-flex">
                    <input
                      className="form-control text-center me-3"
                      id="inputQuantity"
                      type="num"
                      defaultValue={1}
                      style={{ maxWidth: "3rem" }}
                    />
                    <button
                      className="btn btn-outline-dark flex-shrink-0"
                      type="button"
                    >
                      <i className="bi-cart-fill me-1" />
                      Hire Him Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr
            style={{
              padding: "10px",
              margin: "0",
              marginLeft: "120px",
              borderRadius: "30px",
              color: "white",
            }}
          />

          {/* Related items section*/}
          <section
            className="py-5 bg-light"
            style={{
              backgroundImage:
                "-webkit-gradient(linear,left top,right top,from(#fc4a1a),to(#f7b733))",
            }}
          >
            <div className="container px-4 px-lg-5 mt-5 fixingBottom">
              <h2 className="fw-bolder mb-4">Other Related Services</h2>
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {res.length === 0 ? (
                  <>
                    <h2>No Related Services Found...!!!</h2>
                  </>
                ) : (
                  res.slice(0, 4).map((val, ind) => {
                    return (
                      <div className="col mb-5 " key={ind}>
                        <div className="card h-100">
                          {/* Sale badge*/}
                          <div
                            className="badge bg-dark text-white position-absolute"
                            style={{ top: "0.5rem", right: "0.5rem" }}
                          >
                            Services
                          </div>
                          {/* Product image*/}
                          <img
                            className="card-img-top"
                            src={`http://localhost:4000/cardsdata/uploads/${val.image}`}
                            alt="ImageBanner"
                          />
                          {/* Product details*/}
                          <div className="card-body p-4">
                            <div className="text-center">
                              {/* Product name*/}
                              <h5 className="fw-bolder"> {val.name} </h5>
                              {/* Product reviews*/}
                              <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                              </div>
                              {/* Product price*/}
                              <span className="text-muted ">
                                {val.selectDistrict},
                              </span>
                              {val.selectArea}
                            </div>
                          </div>
                          {/* Product actions*/}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                              <button
                                className="btn btn-outline-dark mt-auto"
                                onClick={() =>
                                  Clicked(`/serviceDetails/${val._id}`)
                                }
                              >
                                {/* <Link
                                className="btn btn-outline-dark mt-auto"
                                to={`/serviceDetails/${val._id}`} //Error not Rendering the Service
                              > */}
                                View More Details
                                {/* </Link> */}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </section>
          {/* Related items section Ends here*/}
        </div>
        {/* <!-- Product actions--> */}
      </div>
    </>
  );
};

export default ServicesDetails;
