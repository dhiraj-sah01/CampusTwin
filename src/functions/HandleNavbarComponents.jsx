import React from "react";

//Importing functions
import GetUser from "../functions/GetUser";

//Importing component


import SignInNavbarComponents from "../Components/signUp/SignIn_navbar_components";
import UserNavbarConponents from '../pages/userPage/User_navbar_components';
import AdminNavbarComponents from '../pages/AdminPage/Admin_navbar_components';
import TechnicianNavbarComponents from "../pages/TechnicianPage/TechnicianNavbarComponents";

function HandleNavbarComponents() {
  const user = GetUser();

  let navContent;
  if(user){
    if(user.email.endsWith("@kiit.technician.ac.in")){ //mail check for users
      navContent = <UserNavbarConponents/>;
    }
    else if(user.email.endsWith("@kiit.admin.ac.in")){//mail check for admins
      navContent = <AdminNavbarComponents/>;
    }
    else if(user.email.endsWith("@gmail.com")){//mail check for technicians
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
