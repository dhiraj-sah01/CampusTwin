import React from "react";

import "./TechnicianPage.css";

function TechnicianPage() {
  const pendingCount = 10;
  const completedCount = 0;
  return (
    <div className="technician-page-container">
      <div className="status-info">
        <ul>
          <li>
            Pending
          </li>
          <span className="status-count">
              {pendingCount <= 9 ? pendingCount : "9+"}
            </span>
          <li>
            Completed
          </li>
          <span className="status-count">
              {completedCount <= 9 ? completedCount : "9+"}
            </span>
        </ul>
      </div>
      <div className="issues-cards-technicianPage">
        <div className="issuesBox-technicianPage">
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
      </div>
    </div>
  );
}

export default TechnicianPage;
