import React from "react";

import "./IssuesRaised.css";

import Navbar from "../../Components/navbar/navbar";
import Footer from "../../Components/footer/footer";


function History() {
  return (
    <div className="main1">
      <Navbar />
      <div className="main2">
        <div className="history">
          <div className="issuesBox">
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
      <Footer />
    </div>
  );
}

export default History;
