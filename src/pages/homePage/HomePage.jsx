//Importing react components
import React from 'react'

//Importing Assets
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/footer/footer';

//Importing css files
import "../../Components/main/Main.css";

const HomePage = () => {
  return (
    <div className='main1'>
      <Navbar/>
      <div className="main2"></div>
      <Footer/>
    </div>
  )
}

export default HomePage
