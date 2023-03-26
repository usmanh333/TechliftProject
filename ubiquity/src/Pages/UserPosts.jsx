import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie"; // seting token in cookie
import axios from "axios";

const UserPosts = () => {
  const [showInput, setShowInput] = useState([]);
  const userClick = async () => {
    const token = Cookies.get("token");
    const result = await axios.get("http://localhost:4000/cardsdata", {
      headers: { "Authorization": `Bearer ${token}` }, // Second Header verify the token
    }); // getting data from database
    setShowInput(result.data);
    window.scrollTo(0, 0);
  };
  // Delete Funtion
  const deletePost = async (id) => {
    const token = Cookies.get("token");
    console.log(id);
    let removeRes = await axios.delete("http://localhost:4000/cardsdata/" + id , {
      headers: { "Authorization": `Bearer ${token}` }, // Second Header verify the token
    });
    if (removeRes) {
      userClick();
    }
  };

  // Protecting the cards from deleting and updating 

  const [userData, setUserData] = useState({});
 
  const fetchUserProfile = async () => {
    const token = Cookies.get("token"); //  get the token from cookies
    const header = {
      headers: { Authorization: `Bearer ${token}` }, // matching headers with frontend and token also
    };
    try {
      const response = await axios.get("http://localhost:4000/profile", header); // getting login user details 
      console.log(response);
      setUserData(response.data);
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  // END

  useEffect(() => {
    userClick();
    fetchUserProfile();
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
                "-webkit-gradient(linear,left top,right top,from(#fc4a1a),to(#f7b733))", scrollBehavior:"smooth"
            }}
          >
            <div className="headingFifth">
              Here You can see all services You have Posted also You can update and delete Services from here
            </div>
            <hr />
              <h3>The Total Services You have Posted Until Now({showInput.filter(val => val.userID === userData.id).length})</h3>
            <MDBRow className="mt-4">
              {showInput.slice().reverse().map((val, ind) => {
                return ( val.userID ===userData.id ?
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
                          {
                            val.userID === userData.id && <>
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
                            </>
                          }
                          
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  </MDBCol>
                :<></>);
              })}
            </MDBRow>
          </MDBContainer>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default UserPosts;