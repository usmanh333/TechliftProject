import React from "react";
import { useParams } from "react-router-dom";
import data from "../Components/CategoriesUiData"

const ViewAllServices = () => {
  const {id } = useParams()
  const param = data.find((x)=> x.id == id);

  return (
    <div> 
      <h1>View All Services</h1>
      {/* <h3>{param.name}</h3> */}
      {param.desc}
    </div>
  );
};

export default ViewAllServices;
