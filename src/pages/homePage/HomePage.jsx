//Importing react components
import React from 'react'
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

//Importing components
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation'
import UserPage from '../userPage/userPage'
import AdminPage from '../AdminPage/AdminPage';
import TechnicianPage from '../TechnicianPage/TechnicianPage';

//Importing css files
import "../../Components/css/Main.css";

const HomePage = () => {
  const navigate = useNavigate();

  let content;

  //get user status
  const { user, loading } = useAuth();
  if (loading) {
    return null;
  }
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
  }

  return (
    <div className='main1'>
      <Navbar/>
      
      {
            
      }
      <div className="main2">
        
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
