import React, { useEffect, useState } from "react";
import "../CSS Files/ProductUI.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const ProductUI = () => {
  const [showInput, setShowInput] = useState([]);
  const userClick = async () => {
    const result = await fetch("http://localhost:4000/cardsdata"); // getting data from database
    const user = await result.json();
    setShowInput(user);
    // navigate('/servicesAll/')
  };
  useEffect(() => {
    userClick();
  }, []);

  return (
    <MDBContainer
      fluid
      className="text-center"
      style={{
        backgroundImage:
          "-webkit-gradient(linear,left top,right top,from(#fc4a1a),to(#f7b733))",
      }}
    >
      <MDBRow>
        {showInput.slice(0, 4).map((val, ind) => {
          return (
            <>
              <MDBCol md="12" lg="3" className="mb-4" key={ind}>
                <MDBCard style={{ height: "720px", width: "100%" }}>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >
                    <MDBCardImage
                      src={`http://localhost:4000/cardsdata/uploads/${val.image}`}
                      fluid
                      className="w-100"
                      style={{ borderRadius: "0", marginTop: "0px" }}
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-primary ms-2">New</span>
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
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <p>{val.selectCategory}</p>
                    </a>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">
                        Description : {val.desc.substring(0, 50)}
                        {val.desc.length > 50 ? "..." : ""}
                      </h5>
                    </a>
                    {/* <h6 className="mb-3">Price : {val.price}</h6> */}
                    <h6 className="mb-3">
                      Area : {val.selectDistrict}, {val.selectArea}
                    </h6>
                    <button className="btn">
                      <Link
                        className="btn btn-outline-dark mt-auto"
                        to={`/serviceDetails/${val._id}`}
                      >
                        See More Details
                      </Link>
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
};

export default ProductUI;
