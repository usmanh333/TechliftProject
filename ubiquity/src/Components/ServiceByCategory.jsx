import React from "react";
import { useParams } from "react-router-dom";
import data from "../Components/CategoriesUiData";

const ServiceByCategory = () => {
  const { id } = useParams();
  const param = data.find((x) => x.id == id);

  return (
    <div className="fixingBottom">
      <h1>Services Filtered By Category</h1>
      {/* <h3>{param.name}</h3> */}
      {param.desc}
    </div>
  );
};

export default ServiceByCategory;
