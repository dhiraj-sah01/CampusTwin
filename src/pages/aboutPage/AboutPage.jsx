//Importing react components
import React from "react";

//Importing Assets
import Navbar from "../../Components/navbar/navbar";
import Footer from "../../Components/footer/footer";

import './AboutPage.css'

//Importing css files
import "../../Components/css/Main.css";

const AboutPage = () => {
  return (
    <div className="main1">
      <Navbar />
      <div className="main2 aboutPage">
        <h2>About Campus Twin </h2>
        <p>
          Campus Twin is a smart digital platform designed to
          simplify campus maintenance and issue management. It allows users to
          explore campus spaces through interactive 3D models, identify specific
          components or facilities, and report maintenance issues directly from
          the system. Reported issues are organized based on their location,
          priority, and status, allowing administrators to manage requests
          efficiently and assign them to technicians. By connecting users,
          administrators, technicians, and an interactive digital representation
          of the campus, Campus Twin aims to make maintenance management faster,
          more organized, and easier to track.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
