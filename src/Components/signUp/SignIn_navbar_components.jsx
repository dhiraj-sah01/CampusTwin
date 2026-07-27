import React, {useState} from "react";
import { Link } from "react-router-dom";


import './signUp.css'


function SignIn_navbar_components() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navComponent">
      <div
        className={`hamburger_user hamburger  ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? "nav-menu-signIn active" : "nav-menu-signIn"}>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/features" className="nav-link">
          Features
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        
        
      </nav>
    </div>
  );
}

export default SignIn_navbar_components;
