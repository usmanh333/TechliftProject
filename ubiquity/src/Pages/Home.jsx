import React from "react";
import Slider from "../Components/Slider";
import "../CSS Files/CarasoleMain.css";
import HomeSection from "../Components/HomeSection";
import ProductUI from "../Components/ProductUI";
import UsersReview from "../Components/UsersReview";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Slider />
      <HomeSection />
      <ProductUI />
      <UsersReview />
    </>
  );
}

export default Home;
