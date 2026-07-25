// Importing react components
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { MapContainer } from "react-leaflet";

//Importing css files
import "./userPage.css";
import "../../Components/css/Main.css";

import CampusMap from "../../Components/CampusMap/CampusMap";
// import UserNavigate_toClass from "./UserNavigate_toClass";
import UserBlueprint from "./UserBlueprint"
//Importing Assets

const UserPage = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  //for selections
  const [campus, setCampus] = useState("");
  const [block, setBlock] = useState("");
  const [classNo, setClassNo] = useState("");

  //for map
  const { setCenterReceive } = useAuth();
  const { setzoomCenterReceive } = useAuth();
  const locations = {
    C25: [20.36435919926926, 85.81697881227231],
  };

  //for content
  const [showInfo, setShowInfo] = useState(true);


  return (
    <div>
      {/* <UserNavigate_toClass/> */}
      <div className="UserNavigate_toClass">
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
              <option value="C25" id="colorOption">
                C25
              </option>
            </select>
          </div>

          <div className="selectCampus">
            {campus && (
              <>
                <label for="Block-select">Choose a Block no.:</label>
                <select
                  value={block}
                  onChange={(e) => {
                    setBlock(e.target.value);
                    setShowInfo(false);
                    setzoomCenterReceive(locations[campus]);
                  }}
                >
                  <option value="" disabled hidden>
                    Select Block
                  </option>
                  {campus === "C25" ? (
                    <option value="A" id="colorOption">
                      A
                    </option>
                  ) : (
                    <></>
                  )}
                </select>                
              </>
            )}
          </div>

          <div className="selectCampus">
            {block && (
              <>
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
                      <option key={i + 1} value={`A${i + 1}`} id="colorOption">
                        {i < 9 ? `A 00${i + 1}` : `A 0${i + 1}`}
                      </option>
                    ))
                  ) : (
                    <></>
                  )}
                </select>
              </>
            )}
          </div>
        </nav>
      </div>


      {showInfo? <CampusMap /> : <UserBlueprint block={block} />}
    </div>
  );
};

export default UserPage;
