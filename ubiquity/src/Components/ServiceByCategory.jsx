import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
import Axios from "axios";

const ServiceByCategory = () => {
  const { id } = useParams();
  const category = data.find((x) => x.id == id).Category;

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchServices = async () => {
    const result = await Axios.get("http://localhost:4000/cardsdata");
    const data = result.data;
    setServices(data);
    console.log(data);
    console.log(services);
    setLoading(false); // Set loading to false when data is loaded
  };

  useEffect(() => {
    fetchServices();
  }, []);
  const filteredServices = services.filter(
    (service) => service.selectCategory == category
  );
  console.log(category);
  // if (filteredServices.length === 0) {
  //   return <p>No services found in {category}</p>;
  // }
  console.log(filteredServices);

  if (loading) {
    return <p>Loading...</p>; // Show loading message
  }

  return (
    <>
      <div className="">
        <div
          className="d-flex flex-wrap justify-content-evenly"
          style={{
            backgroundImage:
              "-webkit-gradient(linear,left top,right top,from(#fc4a1a),to(#f7b733))",
          }}
        >
          <MDBContainer fluid className="text-center">
            <div className="headingFifth">
              <div className="headingFifth">
                <h1>Services Filtered By Category</h1>
                <h2>
                  Services in {category} ({filteredServices.length})
                </h2>
              </div>
            </div>
            <hr />
            <MDBRow className="mt-4">
              {filteredServices.length === 0 ? (
                <>
                  <h1>No Services Posted yet in {category}</h1>
                </>
              ) : (
                filteredServices.map((service) => {
                  return (
                    <MDBCol md="12" lg="3" className="mb-4 mt-2">
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
                            <Link to={`/serviceDetails/${service._id}`}>
                              <MDBCardImage
                                src={`http://localhost:4000/cardsdata/uploads/${service.image}`}
                                fluid
                                className="w-100"
                                style={{
                                  borderRadius: "10px",
                                  marginTop: "0px",
                                }}
                              />
                            </Link>
                            <Link to={`/serviceDetails/${service._id}`}>
                              <div className="mask">
                                <div className="d-flex justify-content-start align-items-end h-100">
                                  <h5>
                                    <span className="badge bg-primary ms-2">
                                      New
                                    </span>
                                    <span className="badge bg-success ms-2">
                                      {service.selectCategory}
                                    </span>
                                    <span className="badge bg-danger ms-2">
                                      {service.selectDistrict},
                                      {service.selectArea}
                                    </span>
                                  </h5>
                                </div>
                              </div>
                              <div className="hover-overlay">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(251, 251, 251, 0.15)",
                                  }}
                                ></div>
                              </div>
                            </Link>
                          </MDBRipple>
                          <MDBCardBody>
                            <a className="text-reset">
                              <h5 className="card-title mb-3">
                                <strong>Designation :</strong> {service.name}
                              </h5>
                            </a>
                            {/* <a href="#!" className="text-reset">
                          <p>Category</p>
                        </a> */}
                            <h6 className="mb-3">
                              Description : {service.desc.substring(0, 50)}
                              {service.desc.length > 50 ? "..." : ""}
                            </h6>
                            {/* <button
                          class="btn btn-danger m-2"
                          onClick={() => {
                            deletePost(val._id);
                          }}
                        >
                          Remove
                        </button>
                        <button className="btn btn-success">
                          <Link to={`/updateService/${val._id}`}>Update</Link>
                        </button> */}
                            <button className="btn">
                              <Link
                                className="btn btn-outline-dark mt-auto"
                                to={`/serviceDetails/${service._id}`}
                              >
                                See More Details
                              </Link>
                            </button>
                          </MDBCardBody>
                        </MDBCard>
                      </div>
                    </MDBCol>
                  );
                })
              )}
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default ServiceByCategory;
