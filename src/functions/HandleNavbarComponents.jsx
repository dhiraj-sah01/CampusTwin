import React from "react";

//Importing functions
import GetUserType from "./GetUserType";

//Importing component
import SignInNavbarComponents from "../Components/signUp/SignIn_navbar_components";
import UserNavbarConponents from '../pages/userPage/User_navbar_components';
import AdminNavbarComponents from '../pages/AdminPage/AdminNavbarComponents';
import TechnicianNavbarComponents from "../pages/TechnicianPage/TechnicianNavbarComponents";


function HandleNavbarComponents() {
  const userType = GetUserType();

  let navContent;
  if(userType){
    if(userType === "user"){ //mail check for users
      navContent = <UserNavbarConponents/>;
    }
    else if(userType === "admin"){//mail check for admins
      navContent = <AdminNavbarComponents/>;
    }
    else if(userType === "technician"){//mail check for technicians
      navContent = <TechnicianNavbarComponents/>;
    }
  }
  else{
    navContent = <SignInNavbarComponents/>;
    // navContent = <User_navbar_conponents/>;
  }

  return navContent;
}

export default HandleNavbarComponents;
