import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

import "./userPage.css";

import GetUser from "../../functions/GetUser";
import HandleSignOut from "../../functions/handleSignOut";

function User_navbar_components() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  //for selections
  const [campus, setCampus] = useState("");
  const [block, setBlock] = useState("");
  const [classNo, setClassNo] = useState("");

  //for map
  const { setCenterReceive } = useAuth();
  const locations = {
    C25: [20.36435919926926, 85.81697881227231],
  };

  //for userProfile
  const [open, setOpen] = useState(false);
  const userOptions = ["History", "LogOut"];

  //handle options of user
  const handleSelect = (option) => {
    if (option === "LogOut") {
      HandleSignOut();
      navigate("/");
    }
    setOpen(false);
  };

  const user = GetUser();
  return (
    <div>
      <div className="navComponent">
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <div className="selectCampus">
            <label for="Campus-select">Choose a Campus:</label>
            <select
              value={campus}
              onChange={(e) => {
                const selectedCampus = e.target.value;

                setCampus(selectedCampus);
                setCenterReceive(locations[selectedCampus]);
              }}
            >
              <option value="" disabled hidden>
                Select Campus
              </option>
              <option value="C25">C25</option>
            </select>
          </div>

          <div className="selectCampus">
            <label for="Block-select">Choose a Block no.:</label>
            <select value={block} onChange={(e) => setBlock(e.target.value)}>
              <option value="" disabled hidden>
                Select Block
              </option>
              {campus === "C25" ? <option value="A">A</option> : <></>}
            </select>
          </div>
          <div className="selectCampus">
            <label for="Class-select">Choose a Class no.:</label>
            <select
              value={classNo}
              onChange={(e) => setClassNo(e.target.value)}
            >
              <option value="" disabled hidden>
                Select Class
              </option>
              {campus === "C25" && block === "A" ? (
                Array.from({ length: 18 }, (_, i) => (
                  <option key={i + 1} value={`A${i + 1}`}>
                    {i <= 9 ? `A 00${i + 1}` : `A 0${i + 1}`}
                  </option>
                ))
              ) : (
                <></>
              )}
            </select>
          </div>
        </nav>

        <div className="user-dropdown">
          <div className="user-info">
            <button
              className="user-dropdown-btn"
              onClick={() => {
                setOpen(!open);
                console.log(user);
                console.log(user.photoURL);
              }}
            >
              <img src={user.photoURL} alt="Profile" className="profileImg" />
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
    </div>
  );
}

export default User_navbar_components;
