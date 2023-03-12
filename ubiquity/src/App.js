import './CSS Files/NavStyle.css';
import NavBar from './Components/NavBar';
import {Routes, Route, Outlet} from 'react-router-dom';
import Home from "./Pages/Home"
import AboutPage from "./Pages/aboutUs"
import Services from "./Pages/servicesMain"
import AllServices from "./Pages/viewAllServices"
import LoginPage from "./Pages/loginPage"
import RegisterPage from "./Pages/register"
import ServiceByCategory from './Components/ServiceByCategory';
import PostAServiceForm from './Pages/PostAServiceForm';
import UpdateServiceForm from './Pages/UpdateServiceForm';
import ServicesDetails from './Pages/ServicesDetails';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';
import ProtectedRoute from './Pages/ProtectedRoute';

 
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<AboutPage/>}/>
        <Route element={<ProtectedRoute />}>
          <Route path="/services" element={<Services/>}/>
          <Route path="/servicesAll/" element={<AllServices/>}/>
          <Route path="/postAService" element={<PostAServiceForm/>}/>
          <Route path="/updateService/:id" element={<UpdateServiceForm />}/>
          <Route path="/serviceDetails/:id" element={<ServicesDetails />}/>
          <Route path="/services/:id" element={<ServiceByCategory/>}/>
        </Route>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
