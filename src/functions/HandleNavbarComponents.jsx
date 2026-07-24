import React from "react";

//Importing functions
import GetUser from "../functions/GetUser";

//Importing component


import SignIn_navbar_components from "../Components/signUp/SignIn_navbar_components";
import User_navbar_conponents from '../pages/userPage/User_navbar_components';
import Admin_navbar_components from '../pages/AdminPage/Admin_navbar_components';
import Technician_navbar_components from "../pages/TechnicianPage/Technician_navbar_components";

function HandleNavbarComponents() {
  const user = GetUser();

  let navContent;
  if(user){
    if(user.email.endsWith("@gmail.com")){ //mail check for users
      navContent = <User_navbar_conponents/>;
    }
    else if(user.email.endsWith("@kiit.admin.ac.in")){//mail check for admins
      navContent = <Admin_navbar_components/>;
    }
    else if(user.email.endsWith("@kiit.technician.ac.in")){//mail check for technicians
      navContent = <Technician_navbar_components/>;
    }
  }
  else{
    navContent = <SignIn_navbar_components/>;
  }

  return navContent;
}

export default HandleNavbarComponents;
