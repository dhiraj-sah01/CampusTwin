// Importing react components
import React, { useState, useRef } from "react";

//Importing css files
import "../../Components/css/Main.css";

//Importing Assets
import Navbar from "../../Components/navbar/navbar";
import SignUp from "../../Components/signUp/signUp";
import Footer from "../../Components/footer/footer";


const LoginPage = () => {

  return (
    <div ClassName="login-page">
      <div className="main1">
        {/* navbar Section */}
        <Navbar/>
        
        {/* signUp Section */}
        <SignUp/>

        {/* footer Section*/}
        <Footer/>
      </div>
    </div>
  );
};

export default LoginPage;
