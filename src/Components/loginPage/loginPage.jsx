import React, { useState, useRef } from "react";
import "./loginPage.css";
import googleIcon from "../Assets/icons8-google.png";
import logo from "../Assets/logo1.png";
import protectionIcon from "../Assets/protection-icon.png";
import reportIssues_Icon from "../Assets/icons8-report-24.png"
import trackStatus_Icon from "../Assets/icons8-graph-50.png"
import betterCampus_Icon from "../Assets/icons8-protection-50.png"


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
      <div className="main1">
        <header className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <img src={logo} alt="Logo" className="logo-image" />
              <a href="/">College<span>Twin</span></a>
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
              <a href="#about" onClick={openModal} className="nav-link">
                About
              </a>
              <dialog ref={dialogRef} className="native-modal">
                <h2>Information</h2>
                <p>This React popup was opened safely via an anchor link!</p>
                <button onClick={closeModal} className="close-btn">
                  Close Window
                </button>
              </dialog>
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
              <a href="#signup" className="signup-btn">
                Sign Up
              </a>
            </nav>
          </div>
        </header>
        <div className="main">
          <div className="slides">
            <div className="slide1">
              <div className="qoute">
                <img src={protectionIcon} alt="Protection Icon" className="protection-icon" />
                <h3>Smarter Today. Better Tomorrow.</h3>
              </div>
              <h1 id="text-home">Smart Campus.</h1>
              <h1 id="text-home">
                Smart &nbsp; <span> Maintenance.</span>
              </h1>
              <p id="text-slide1">
                Report issues, track maintenance requests, and manage campus
                infrastructure in one intelligent platform.
              </p>
              <div className="features-info"> 
                <ul>
                  <li>
                    <div className="feature">
                      <img src={reportIssues_Icon} alt="" id="reportIssues_Icon" />
                      <div className="feature-text">
                        <h4>Report Issues</h4>
                        <p>Quick & Easy</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="feature">
                      <img src={trackStatus_Icon} alt="" id="trackStatus_Icon" />
                      <div className="feature-text">
                        <h4>Track Status</h4>
                        <p>Real-time Updates</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="feature">
                      <img src={betterCampus_Icon} alt="" id="betterCampus_Icon"/>
                      <div className="feature-text">
                        <h4>Better Campus</h4>
                        <p>For Everyone</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="welcome-banner">
              <h1>Welcome to CollegeTwin </h1>
              <p>Sign in with your college Google account to continue.</p>
              <button className="signIn-btn">
                <img src={googleIcon} alt="" />
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="footer">
          <p>&copy; 2026 CollegeTwin. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
