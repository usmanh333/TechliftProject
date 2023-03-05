import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import "../CSS Files/ProductUI.css";
import moment from "moment";
import { Link } from "react-router-dom";

const ViewAllServices = () => {
  const [showInput, setShowInput] = useState([]);
  const userClick = async () => {
    const result = await fetch("http://localhost:4000/cardsdata"); // getting data from database
    const user = await result.json();
    setShowInput(user);
    window.scrollTo(0, 0);
    // navigate('/servicesAll/')
  };
  // Delete Funtion
  const deletePost = async (id) => {
    console.log(id);
    let removeRes = await fetch("http://localhost:4000/cardsdata/" + id, {
      method: "delete", // Always define method
    });
    removeRes = await removeRes.json();
    if (removeRes) {
      userClick();
    }
  };

  useEffect(() => {
    userClick();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="d-flex flex-wrap justify-content-evenly">
        <div className="">
          <MDBContainer
            fluid
            className="text-center"
            style={{
              backgroundImage:
                "-webkit-gradient(linear,left top,right top,from(#fc4a1a),to(#f7b733))",
            }}
          >
            <div className="headingFifth">
              Here You can see all services which are uploaded by our Service
              Providers
            </div>
            <hr />
            <MDBRow className="mt-4">
              {showInput.map((val, ind) => {
                return (
                  <MDBCol md="12" lg="3" className="mb-4 mt-2" key={ind}>
                    <div className="">
                      <MDBCard
                        className="makeFlex"
                        style={{ height: "720px", width: "100%" }}
                      >
                        <MDBRipple
                          rippleColor="light"
                          rippleTag="div"
                          className="bg-image rounded hover-zoom"
                        >
                          {/* <div className="d-flex justify-content-start align-items-end h-100">
                                <h5>
                                  <span className="mt-2 badge bg-secondary ms-2">
                                    Posted At : {moment(val.date).format("MMMM Do YYYY, h:mm:ss a")}
                                  </span>
                                </h5>
                              </div> */}
                          <Link to={`/serviceDetails/${val._id}`}>
                            <MDBCardImage
                              src={`http://localhost:4000/cardsdata/uploads/${val.image}`}
                              fluid
                              className="w-100"
                              style={{ borderRadius: "10px", marginTop: "0px" }}
                            />
                          </Link>
                          <Link to={`/serviceDetails/${val._id}`}>
                            <div className="mask">
                              <div className="d-flex justify-content-start align-items-end h-100">
                                <h5>
                                  <span className="badge bg-primary ms-2">
                                    New
                                  </span>
                                  <span className="badge bg-success ms-2">
                                    {val.selectCategory}
                                  </span>
                                  <span className="badge bg-danger ms-2">
                                    {val.selectDistrict}, {val.selectArea}
                                  </span>
                                </h5>
                              </div>
                            </div>
                            <div className="hover-overlay">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.15)",
                                }}
                              ></div>
                            </div>
                          </Link>
                        </MDBRipple>
                        <MDBCardBody>
                          <a className="text-reset">
                            <h5 className="card-title mb-3">
                              <strong>Designation :</strong> {val.name}
                            </h5>
                          </a>
                          {/* <a href="#!" className="text-reset">
                            <p>Category</p>
                          </a> */}
                          <h6 className="mb-3">
                            Description : {val.desc.substring(0, 50)}
                            {val.desc.length > 50 ? "..." : ""}
                          </h6>
                          <button
                            class="btn btn-danger m-2"
                            onClick={() => {
                              deletePost(val._id);
                            }}
                          >
                            Remove
                          </button>
                          <button className="btn btn-success">
                            <Link to={`/updateService/${val._id}`}>Update</Link>
                          </button>
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default ViewAllServices;

// <div key={ind}>
//               <li>{val.name}</li>
//               <li>{val.desc}</li>
//               <li>{val.price}</li>
//               <li>{val.number}</li>
//               <li>{val.selectDistrict}</li>
//               <li>{val.selectArea}</li>
//               <li>{moment(val.date).format("MMMM Do YYYY, h:mm:ss a")}</li>
//               <li>{val.checkbox}</li>
//               <li>{val.selectCategory}</li>
//               <li>
//                 <img
//                   src={`http://localhost:4000/cardsdata/uploads/${val.image}`}
//                 />
//               </li>
