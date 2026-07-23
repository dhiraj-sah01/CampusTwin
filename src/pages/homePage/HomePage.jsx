//Importing react components
import React from 'react'
import { useNavigate } from "react-router-dom";

//Importing a function
import GetUser from '../../functions/GetUser';

//Importing components
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
// import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation'
import UserPage from '../userPage/userPage'
import AdminPage from '../AdminPage/AdminPage';
import TechnicianPage from '../TechnicianPage/TechnicianPage';
import SignUp from '../../Components/signUp/signUp';

//Importing css files
import "../../Components/css/Main.css";

const HomePage = () => {
  const navigate = useNavigate();

  let content;
  const user = GetUser();

  //checks who have signIn student, teacher or technician.
  if(user){
    if(user.email.endsWith("@kiit.ac.in")){ //mail check for users
      content = <UserPage/>;
    }
    else if(user.email.endsWith("@kiit.admin.ac.in")){//mail check for admins
      content = <AdminPage/>;
    }
    else if(user.email.endsWith("@kiit.technician.ac.in")){//mail check for technicians
      content = <TechnicianPage/>;
    }
    navigate("/");
  }
  else{
    content = <SignUp/>;
  }

  return (
    <div className='main1'>
      <Navbar/>
      
      <div className="main2">
        {content}
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
