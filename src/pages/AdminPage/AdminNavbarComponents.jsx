import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../AuthContext";

import "../userPage/userPage.css";
// import "./TechnicianPage.css"

import GetUser from "../../functions/GetUser";
import HandleSignOut from "../../functions/handleSignOut";


function Admin_navbar_components({ setShowTechnicianList }) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const userOptions = ["View Technicians","LogOut"];

  //handle options of user
  const handleSelect = (option) => {
    if (option === "LogOut") {
      HandleSignOut();
      navigate("/");
    }
    if(option === "View Technicians"){
      setShowTechnicianList(true);
    }
    setOpen(false);
  };

  const user = GetUser();

 //to hide popup if clicked outside the div
  useEffect(() => {
  const handleClick = (e) => {
    if (!e.target.closest(".user-dropdown")) {
      setOpen(false);
    }
  };

  document.addEventListener("click", handleClick);

  return () => {
    document.removeEventListener("click", handleClick);
  };
}, []);


  return (
    <div className="navbar-rightContainer">
      
        <div className="user-dropdown">
          <div className="user-info">
            <button
              className="user-dropdown-btn"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img src={user.photoURL} alt="Profile" className="profileImg"/>
              <span>{user.displayName}</span>
            </button>

            {open && (
              <div className="user-dropdown-menu">
                {userOptions.map((option) => (
                  <div
                    key={option}
                    className="user-dropdown-item"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Admin_navbar_components;
