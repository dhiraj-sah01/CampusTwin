import React, {useState, useRef} from "react";
import "./loginPage.css";
import google from "../Assets/icons8-google.png";

const LoginPage = () => {
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
    <div ClassName="login-page">
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="/">CollegeTwin</a>
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
            <a href="#about" onClick={openModal}>About</a>
            <dialog ref={dialogRef} className="native-modal">
              <h2>Information</h2>
              <p>This React popup was opened safely via an anchor link!</p>
              <button onClick={closeModal} className="close-btn">
                Close Window
              </button>
            </dialog>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
            <a href="#signup" className="signup-btn">
              Sign Up
            </a>
          </nav>
        </div>
      </header>
      <div className="main">
        <div className="slides">
          <div className="slide1">
            <h1 id="text-home">Smart Campus.</h1>
            <h1 id="text-home">
              Smart &nbsp; <span> Maintenance.</span>
            </h1>
            <p id="text-slide1">
              Report issues, track maintenance requests, and manage campus
              infrastructure in one intelligent platform.
            </p>
          </div>
        </div>
        <div className="welcome-banner">
          <h1>Welcome to the Login Page</h1>
        </div>
      </div>

      {/* footer */}
      <div className="footer">
        <p>&copy; 2026 CollegeTwin. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LoginPage;
