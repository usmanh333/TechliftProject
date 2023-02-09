import './CSS Files/NavStyle.css';
import NavBar from './Components/NavBar';
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home"
import AboutPage from "./Pages/aboutUs"
import Services from "./Pages/servicesMain"
import AllServices from "./Pages/viewAllServices"
import LoginPage from "./Pages/loginPage"
import RegisterPage from "./Pages/register"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/allServices" element={<AllServices/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>


    </div>
  );
}

export default App;
