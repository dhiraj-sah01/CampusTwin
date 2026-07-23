import React from "react";

//Importing functions
import GetUser from "../functions/GetUser";

//Importing component
import SignIn_navbar_components from "../Components/signUp/SignIn_navbar_components";
import Navbar_signInBtn from "../Components/Navbar_signInBtn/Navbar_signInBtn";

function HandleNavbarComponents() {
  const user = GetUser();

  let navContent;
  if (user) {
    if (user.email.endsWith("@kiit.ac.in")) {
    }
     <SignIn_navbar_components/>
  } else {
    navContent = <SignIn_navbar_components/>
  }
  return navContent;
}

export default HandleNavbarComponents;
