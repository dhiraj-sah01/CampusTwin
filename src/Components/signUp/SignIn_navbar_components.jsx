import React, {useState, useRef} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './signUp.css'


import GetUser from "../../functions/GetUser";
import HandleSignOut from "../../functions/handleSignOut";

function SignIn_navbar_components() {
  // const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const user = GetUser();

  return (
    <div className="navComponent">
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
        
        
      </nav>
    </div>
  );
}

export default SignIn_navbar_components;
