import React from "react";
import Footer from "../Components/Footer";
import "../CSS Files/MainServices.css";
import data from "../Components/CategoriesUiData";
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


const ServicesMain = () => {
  return (
    <>
      <MDBContainer fluid className="text-center pt-5 pb-5" style={{backgroundImage: "-webkit-gradient(linear,left top,right top,from(#fc4a1a),to(#f7b733))"}}>
        <h1 className="p-4 mb-4 border">Here are Some Categories of Services </h1>
        <MDBRow>
          {data.map((item) => {
            return (
              <>
                <MDBCol md="12" lg="3" className="mb-4">
                  <MDBCard  style={{height: "550px"}}>
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom"
                    >
                      <MDBCardImage src={item.image} fluid className="w-100" />
                      <Link to={`/services/${item.id}`}>
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100 mt-2">
                            <h5>
                              <span className="badge bg-success ms-2">
                                Category :
                              </span>
                              <span className="badge bg-primary ms-2">
                                {item.name}
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
                    <MDBCardBody className="m-2">
                      <Link to={`/services/${item.id}`}  className="text-reset">
                        <h5 className="card-title text mb-3">{item.desc}</h5>
                      </Link>
                      <Link to={`/services/${item.id}`} className="text-reset">
                        <button className="btn btn-danger"> View Services </button>
                      </Link>
                      
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </>
            );
          })}
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );

}

export default ServicesMain