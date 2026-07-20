// Importing react components
import React from "react";

//Importing css files
import "./signUp.css";

//Importing Assets
import googleIcon from "../../Assets/icons8-google.png";
import protectionIcon from "../../Assets/protection-icon.png";
import reportIssues_Icon from "../../Assets/icons8-report-24.png";
import trackStatus_Icon from "../../Assets/icons8-graph-50.png";
import betterCampus_Icon from "../../Assets/icons8-protection-50.png";

//Importing functions
import SignIn_btn_clicked from "../../functions/signIn_btn_clicked"

const SignUp = () => {

  return (
    <div className="main">
      <div className="slides">
        <div className="slide1">
          <div className="qoute">
            <img
              src={protectionIcon}
              alt="Protection Icon"
              className="protection-icon"
            />
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
                  <img src={betterCampus_Icon} alt="" id="betterCampus_Icon" />
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
          <button className="signIn-btn" onClick={SignIn_btn_clicked}>
            <img src={googleIcon} alt="" onClick={SignIn_btn_clicked} />
            <span onClick={SignIn_btn_clicked}>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
