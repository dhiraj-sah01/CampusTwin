import React from 'react'


import './IssuesContainer.css'

import GetUserType from '../../functions/GetUserType';


function IssuesContainer({showDetails ,setShowDetails}) {
  const pendingCount = 10;
  const completedCount = 0;
  const no_of_issues = 1;
     
  const userType = GetUserType();

  return (
    <div>
    <div className="Issues-page-container">
      
      <div className="status-info">
        <ul>
          <li>Pending</li>
          <span className="status-count">
            {pendingCount <= 9 ? pendingCount : "9+"}
          </span>
          <li>Completed</li>
          <span className="status-count">
            {completedCount <= 9 ? completedCount : "9+"}
          </span>
        </ul>
      </div>
      <div className="issues-cards-technicianPage">
        {Array.from({ length: no_of_issues }).map((_, index) => (
          <div
            className= "issuesBox-technicianPage issuesBox-adminPage"
            onClick={() => {
                if(userType === "technician"){
                    setShowDetails(true);
                }
            }}
          >
            <img src="" alt="" />
            <div className="serialNo">
              <p>S.I. No: </p>
              <span>11012344</span>
            </div>
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
        ))}

        {/* <div className="issuesBox-technicianPage">
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
        </div> */}
      </div>
      </div>
      {/* {showDetails && <div className="showDetails"><DetailsOfIssues setShowDetails={setShowDetails} /></div>} */}
    </div>
  );
}

export default IssuesContainer
