// Importing react components
import React  from "react";
import { Link } from "react-router-dom";
// import { getAuth } from "firebase/auth";

//Importing css files
import './navbar.css'

//Importing Assets
import logo from "../../Assets/logo.png";

//Importing components

// import SignIn_navbar_components from "../signUp/SignIn_navbar_components";
import HandleNavbarComponents from "../../functions/HandleNavbarComponents";


//Importing functions



const Navbar =  () => {


  return (
    <div className="navbar-main">
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
            <Link to="/">
              Campus<span>Twin</span>
            </Link>
          </div>
          <HandleNavbarComponents/>
          
        </div>
      </header>
    </div>
  );
}

export default Navbar;
