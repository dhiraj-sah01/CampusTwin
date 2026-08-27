// Importing react components
import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../../AuthContext";

import Location from "../../Data/Locations";

//Importing css files
import "./userPage.css";
import "../../Components/css/Main.css";

import CampusMap from "../../Components/CampusMap/CampusMap";
// import UserNavigate_toClass from "./UserNavigate_toClass";
import UserBlueprint from "./UserBlueprint";

import GetUser from "../../functions/GetUser";

import ModelViewer from "../../Components/3DModel/ModelViewer";
//Importing Assets

//backend
import { supabase } from "../../lib/supabase";

const UserPage = () => {
  const user = GetUser();

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
  const [modelSelected, setModelSelected] = useState("");

  //report issues
  const inputRef = useRef(null);
  const descriptionRef = useRef(null);
  const priorityRef = useRef(null);
  

  const handlePriorityChange = (event) => {
    priorityRef.current = event.target.value;
    console.log("Current value (no re-render):", priorityRef.current);
  };

  //to hide popup if clicked outside the div
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".nav-menu")) {
        setMenuOpen(false);
      }
      if (e.target.closest(".hamburger_user")) {
        setMenuOpen(true);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // send issues to backend
  const sendIssue = async () => {
    const title = inputRef.current?.value;
    const description = descriptionRef.current?.value;

    if (!title || !description) return;

    const { error } = await supabase.from("issues").insert([
      {
        email: user.email,
        campus: campus,
        block: block,
        room_number: classNo,
        component_name: modelSelected,
        title: inputRef.current.value,
        description: descriptionRef.current.value,
        priority: priorityRef.current || "Low",
        technician: await findTechnician(),
        status: "In Process",
      },
    ]);

    if (error) {
      // console.error("Error sending issue:", error);
      alert("Error sending issue: " + error);
      return;
    }

    inputRef.current.value = "";
    descriptionRef.current.value = "";
    alert("Issue is registered. Thank you!!");
    // console.log("Issue sent successfully:", data);
  };

  const findTechnician = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("name")
      .eq("role", "technician");

    if (error) return;

    const technicians = data.map((tech) => tech.name);
    // console.log(technicians);

    const randomIndex = Math.floor(Math.random() * technicians.length);
    const selectedTechnician = technicians[randomIndex];

    console.log("Selected:", selectedTechnician);

    return selectedTechnician;
  };


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
                    setClassNo(e.target.value);
                    console.log("Selected Class:", e.target.value);
                  }}
                >
                  <option value="" disabled hidden>
                    Select Class
                  </option>
                  {campus === "C25" && block === "A" ? (
                    Array.from({ length: 18 }, (_, i) => (
                      <option
                        key={i + 1}
                        value={i < 9 ? `A00${i + 1}` : `A0${i + 1}`}
                        id="colorOption"
                      >
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

      <div
        className="model-viewer-container"
        style={{ visibility: classNo ? "visible" : "hidden" }}
        // style={{ visibility: ["A001", "A002"].includes(classNo) ? "visible" : "hidden" }}
      >
        <ModelViewer setModelSelected={setModelSelected} modelSelected={modelSelected}/>
        <div className="model-viewer-text">
          <h2>{classNo} : 3D Classroom Model</h2>
          <p>
            Explore the 3D model of the classroom to get a better understanding
            of its layout and design.
          </p>
          <h6>**Click on the Object to get details or Report an Issue.**</h6>
          <div className="line"></div>
          <div className="modelinfo">
            <div className="modelSI">
              <h3>S.I.: </h3>
              <p>2472836</p>
            </div>
            <div className="modelName">
              <h3>Name: </h3>
              <p>{modelSelected}</p>
            </div>
            <div className="modelStatus">
              <h3>Status: </h3>
              <p>working</p>
            </div>
            <div className="modelLocation">
              <h3>Location: </h3>
              <p>
                {campus}-{classNo}
              </p>
            </div>
          </div>
          <div className="line"></div>
          {modelSelected && (
            <div className="reportIssues">
              <h3>Report Issues:</h3>
              <div className="issueTitle">
                <label for="title">Title: </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  ref={inputRef}
                  placeholder="Enter Title"
                  autocomplete="off"
                  required
                ></input>
              </div>
              <div className="issueDescription ">
                <label for="title">Description: </label>
                <input
                  type="text"
                  id="description"
                  ref={descriptionRef}
                  name="description "
                  placeholder="Enter description"
                  autocomplete="off"
                  required
                ></input>
              </div>
              <div className="issuePriority">
                <label>Select Priority of the issue:</label>
                <br></br>

                <input
                  type="radio"
                  id="High"
                  name="priority"
                  value="High"
                  onClick={handlePriorityChange}
                ></input>
                <label for="High">High</label>

                <input
                  type="radio"
                  id="Medium"
                  name="priority"
                  value="Medium"
                  onClick={handlePriorityChange}
                ></input>
                <label for="Medium">Medium</label>

                <input
                  type="radio"
                  id="Low"
                  name="priority"
                  value="Low"
                  onClick={handlePriorityChange}
                  defaultChecked
                ></input>
                <label for="Low">Low</label>
              </div>
              {/* {console.log(priorityRef.current.value)} */}
              <button
                className="summit-btn"
                onClick={(e) => {
                  if (
                    !inputRef.current?.value.trim() ||
                    !descriptionRef.current?.value.trim()
                  ) {
                    return;
                  }

                  sendIssue();
                }}
              >
                Submit
              </button>
            </div>
          )}

          {/* <p>{modelSelected} is selected</p> */}
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
