import React, {useState, useRef} from "react";
import { Link } from "react-router-dom";

import './signUp.css'

import Navbar_signInBtn from "../Navbar_signInBtn/Navbar_signInBtn";

function SignIn_navbar_components() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
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
        <Navbar_signInBtn />
      </nav>
    </div>
  );
}

export default SignIn_navbar_components;
