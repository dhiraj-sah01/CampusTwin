//Importing react components
import React from 'react'


//Importing a function
import GetUserType from '../../functions/GetUserType';

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

  let content;
  const userType = GetUserType();

  //checks who have signIn student, teacher or technician.
  if(userType){
    if(userType === "user"){ //mail check for users
      content = <UserPage/>;

    }
    else if(userType === "admin"){//mail check for admins
      content = <AdminPage/>;
    }
    else if(userType === "technician"){//mail check for technicians
      content = <TechnicianPage/>;
    }
    // navigate("/");
  }
  else{
    content = <SignUp/>;
    // content = <UserPage/>;
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
