import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../AuthContext";

import "../userPage/userPage.css";
import "./TechnicianPage.css"

import GetUser from "../../functions/GetUser";
import HandleSignOut from "../../functions/handleSignOut";


function User_navbar_components() {
  const navigate = useNavigate();

  // const [menuOpen, setMenuOpen] = useState(false);

  // //for selections
  // const [campus, setCampus] = useState("");
  // const [block, setBlock] = useState("");
  // const [classNo, setClassNo] = useState("");

  // //for map
  // const { setCenterReceive } = useAuth();
  // const locations = {
  //   C25: [20.36435919926926, 85.81697881227231],
  // };

  //for userProfile
  const [open, setOpen] = useState(false);
  const userOptions = ["LogOut"];

  //handle options of user
  const handleSelect = (option) => {
    if (option === "LogOut") {
      HandleSignOut();
      navigate("/");
    }
    // if(option === "Issues Raised"){
    //   navigate("/issues")
    // }
    setOpen(false);
  };

  const user = GetUser();
  return (
    <div className="navbar-rightContainer">
      <div className="rating">⭐<span>4.5</span></div>
        <div className="user-dropdown">
          <div className="user-info">
            <button
              className="user-dropdown-btn"
              onClick={() => {
                setOpen(!open);
                // console.log(user);
                // console.log(user.photoURL);
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

export default User_navbar_components;
