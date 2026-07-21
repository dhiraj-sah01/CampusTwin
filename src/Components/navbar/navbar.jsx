// Importing react components
import React, {useState, useRef}  from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

//Importing css files
import './navbar.css'

//Importing Assets
import logo from "../../Assets/logo.png";

//Importing components
import Navbar_signInBtn from "../Navbar_signInBtn/Navbar_signInBtn";


//Importing functions
import SignIn_btn_clicked from "../../functions/signIn_btn_clicked"
// import handleLogin from "../../Login";

const Navbar =  () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //get user info
  const auth = getAuth();
  const user = auth.currentUser;



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

          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/features" className="nav-link">
              Features
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            {/* <button  onClick={()=>{
              if(user){
                console.log(user.displayName)
              }
              SignIn_btn_clicked()
            }} className="navbar-signIn-btn">
              Get Started
            </button> */}
            <Navbar_signInBtn/>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
