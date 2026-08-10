// Importing react components
import React, { useState } from "react";
import { useAuth } from "../../AuthContext";

import Location from "../../Data/Locations";

//Importing css files
import "./userPage.css";
import "../../Components/css/Main.css";

import CampusMap from "../../Components/CampusMap/CampusMap";
// import UserNavigate_toClass from "./UserNavigate_toClass";
import UserBlueprint from "./UserBlueprint";

import ModelViewer from "../../Components/3DModel/ModelViewer";
//Importing Assets


const UserPage = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  //for selections
  const [campus, setCampus] = useState("");
  const [block, setBlock] = useState("");
  const [classNo, setClassNo] = useState("");

  //for map
  const { setCenterReceive } = useAuth();
  const { setZoomCenterReceive } = useAuth();

  //for content
  const [showBlueprint, setShowBlueprint] = useState(false);
  // const [show3DModel, setShow3DModel] = useState(false);

  

  return (
    <div>
      {/* <UserNavigate_toClass/> */}
      <div className="UserNavigate_toClass">
        <div
          className={`hamburger_user ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <div className="selectCampus">
            <label htmlFor="Campus-select">Choose a Campus:</label>
            <select
              value={campus}
              onChange={(e) => {
                const selectedCampus = e.target.value;
                setCampus(selectedCampus);
                setCenterReceive(Location[selectedCampus]);
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
                <label htmlFor="Block-select">Choose a Block no.:</label>
                <select
                  value={block}
                  onChange={(e) => {
                    setBlock(e.target.value);
                    setZoomCenterReceive(Location[campus]);
                    setTimeout(() => {
                      setShowBlueprint(true);
                    }, 2200);
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
                <label htmlFor="Class-select">Choose a Class no.:</label>
                <select
                  value={classNo}
                  onChange={(e) => {
                    setClassNo(e.target.value)
                    console.log("Selected Class:", e.target.value);
                  }}
                >
                  <option value="" disabled hidden>
                    Select Class
                  </option>
                  {campus === "C25" && block === "A" ? (
                    Array.from({ length: 18 }, (_, i) => (
                      <option key={i + 1} value={i < 9 ? `A00${i + 1}` : `A0${i + 1}`} id="colorOption">
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

      <div className="model-viewer-container" style={{ visibility: classNo ? "visible" : "hidden"}}>
        <ModelViewer />
        <div className="model-viewer-text">
          <h2>{classNo} : 3D Classroom Model</h2>
          <p>
            Explore the 3D model of the classroom to get a better understanding
            of its layout and design.
          </p>
        </div>
      </div>

      {/* check either to show blueprint or map */}
      {showBlueprint ? (
        <UserBlueprint block={block} setClassNo={setClassNo} />
      ) : (
        <CampusMap
          updateShowBlueprint={setShowBlueprint}
          setCampus={setCampus}
          setBlock={setBlock}
        />
      )}
      {/* {classNo && <ModelViewer />} */}
    </div>
  );
};

export default UserPage;
