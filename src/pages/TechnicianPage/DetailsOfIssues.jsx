import React from "react";

import "./TechnicianPage.css";


function DetailsOfIssues({ setShowDetails }){
  return (
    <div
      className="details-container-bg"
      onClick={(e) => {
        if (e.target === e.currentTarget){
          setShowDetails(false);
        }
      }}
    >
      <div className="details-container">
        <div className="close-container">
          <button className="closebtn" onClick={() => setShowDetails(false)}>
            ❌
          </button>
        </div>
        
        <div className="issue-detail">
          <img src="" alt="" />
            <div className="reportedOn">
              <p>Reported on: </p>
              <span>2026-07-30 (12:01)</span>
            </div>
            <div className="classRoom">
              <p>Location: </p>
              <span>C25 (A-001)</span>
            </div>
            <div className="techncianAssigned">
              <p>Technician: </p>
              <span>Hari</span>
            </div>
            <div className="priorityLevel">
              <p>Priority level: </p>
              <span>Urgent</span>
            </div>
            <div className="description">
              <p>Description: </p>
              <span>This is the description</span>
            </div>
            <div className="issueStatus">
              <p>IN PROCESS</p>
            </div>
        </div>
        <div className="issue-solve">

        </div>
      </div>
    </div>
  );
}

export default DetailsOfIssues;
