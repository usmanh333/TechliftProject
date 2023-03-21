import "./CSS Files/NavStyle.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/aboutUs";
import Services from "./Pages/servicesMain";
import AllServices from "./Pages/viewAllServices";
import LoginPage from "./Pages/loginPage";
import RegisterPage from "./Pages/register";
import ServiceByCategory from "./Components/ServiceByCategory";
import PostAServiceForm from "./Pages/PostAServiceForm";
import UpdateServiceForm from "./Pages/UpdateServiceForm";
import ServicesDetails from "./Pages/ServicesDetails";
import Footer from "./Components/Footer";
import PageNotFound from "./Components/PageNotFound";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { useState } from "react";
import Profile from "./Pages/Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Global state passing as prop in pages and components
  return (
    <div className="App">
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />{" "}
      {/* passing state to Nav Component as prop to render the condition */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route element={<ProtectedRoute />}>
          {" "}
          {/* Protected routes until user login */}
          <Route path="/services" element={<Services />} />
          <Route path="/servicesAll/" element={<AllServices />} />
          <Route path="/postAService" element={<PostAServiceForm />} />
          <Route path="/updateService/:id" element={<UpdateServiceForm />} />
          <Route path="/serviceDetails/:id" element={<ServicesDetails />} />
          <Route path="/services/:id" element={<ServiceByCategory />} />
          <Route
            path="/profile"
            element={<Profile setLoggedIn={setLoggedIn} />}
          />
        </Route>
        {!loggedIn && (
          <>
            <Route
              path="/login"
              element={<LoginPage setLoggedIn={setLoggedIn} />}
            />
            {/* passing state to login page as prop to render the condition */}
            <Route path="/register" element={<RegisterPage />} />
          </>
        )}
        <Route path="*" element={<PageNotFound />} />
        {/* if no route found this component will render */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
