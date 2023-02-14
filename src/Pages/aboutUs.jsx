import React from "react";
import "../CSS Files/AboutUs.css";
import Footer from "../Components/Footer";

function aboutUs() {
  return (
    <div className="aboutMain">
      <div>
        <img
          src={"../images/marvin-meyer-SYTO3xs06fU-unsplash (2).jpg"}
          className="aboutImage"
          alt="imageAbout"
        />
      </div>
      <div className="aboutField">
        <h1>A Precise Overview</h1>
        <span className="paraAbout">
          Ubiquity is a community platform that connects skilled/unskilled
          people who want to sell their services/time to individual
          users/household/business. Traditional methods that are currently being
          followed in Pakistan have lot of drawbacks in it. Identifying those
          loopholes we are revolutionizing the way how people outsource their
          tasks. We are providing an innovative solution to the problems that
          almost every household and business faces on day to day basis.
        </span>
      </div>
      <div className="aboutFieldTwo">
        <h1>Here You can Learn more About Us</h1>
        <span className="paraAboutTwo">
          Ubiquity not only empowers people who want to outsource task but
          provides an equal opportunity to the taskers (People who want to
          complete different tasks). With Ubiquity not only skilled labor can
          register & find tasks, infact unskilled professionals can register and
          bid for various tasks where skills are not required like pickup &
          delivery, data entry and others. Ubiquity is a solution that lets
          you live an economically stable life by selling your skills to the
          right people with no capital requirements. For taskers, we let you
          save your precious time and find a right person for your job by
          looking at his previous job ratings and save your appliances from the
          brutality of an unskilled worker.
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default aboutUs;
