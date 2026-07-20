// Importing react components
import React, {useState, useRef}  from "react";
import { Link } from "react-router-dom";

//Importing css files
import './navbar.css'

//Importing Assets
import logo from "../../Assets/logo.png";

//Importing functions
import SignIn_btn_clicked from "../../functions/signIn_btn_clicked"

const Navbar =  () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Reference directly targeting the native HTML5 <dialog> element
  const dialogRef = useRef(null); 

  // Safely displays the native modal view
  const openModal = (event) => {
    event.preventDefault(); // Stifles default link jumping/reloading behavior
    dialogRef.current?.showModal();
  };

  // Safely terminates the modal view
  const closeModal = () => {
    dialogRef.current?.close();
  };

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
            <button  onClick={SignIn_btn_clicked} className="navbar-signIn-btn">
              Get Started
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
