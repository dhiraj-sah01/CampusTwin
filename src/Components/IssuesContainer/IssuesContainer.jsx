import React, { useEffect, useState } from "react";

import "./IssuesContainer.css";

import GetUserType from "../../functions/GetUserType";
import GetUser from "../../functions/GetUser";

import { supabase } from "../../lib/supabase";

function IssuesContainer({ showDetails, setShowDetails, setIssueSI }) {
  const user = GetUser();

  const [pendingIssues, setPendingIssues] = useState([]);
  const [completedIssues, setCompletedIssues] = useState([]);

  const [viewPending, setViewPending] = useState(true);

  useEffect(() => {
    const getPendingIssues = async () => {
      const { data, error } = await supabase
        .from("issues")
        .select("*")
        .eq("email", user?.email)
        .eq("status", "In Process");

      if (error) return;
      // console.log("Pending: ", pendingIssues);
      setPendingIssues(data);
    };

    const getCompletedIssues = async () => {
      const { data, error } = await supabase
        .from("issues")
        .select("*")
        .eq("email", user?.email)
        .eq("status", "Completed");

      if (error) return;
      // console.log("Completed: ", completedIssues);
      setCompletedIssues(data);
    };

    if (user?.email) {
      getPendingIssues();
      getCompletedIssues();
    }
  }, [user?.email]);

  //delete Issues
  const [deleteIssueID, setDeleteIssueID] = useState("");
  const deleteIssue = async () => {

  const { error } = await supabase
    .from("issues")
    .delete()
    .eq("id", deleteIssueID)
    .select();

  if (error) {
    console.error("Delete error:", error.message);
    return;
  }
  // setShowDetails(false);
};

  const pendingCount = pendingIssues.length;
  const completedCount = completedIssues.length;
  // const no_of_issues = 1;

  const userType = GetUserType();

  return (
    <div>
      <div className="Issues-page-container">
        <div className="status-info">
          <ul>
            <li
              onClick={() => {
                setViewPending(true);
              }}
              style={{
                borderBottom: viewPending ? "2px solid #050505" : "none",
              }}
            >
              Pending
            </li>
            <span className="status-count">
              {pendingCount <= 9 ? pendingCount : "9+"}
            </span>
            <li
              onClick={() => {
                setViewPending(false);
              }}
              style={{
                borderBottom: !viewPending ? "2px solid #050505" : "none",
              }}
            >
              Completed
            </li>
            <span className="status-count">
              {completedCount <= 9 ? completedCount : "9+"}
            </span>
          </ul>
        </div>
        <div className="issues-cards-technicianPage">
          {/* {Array.from({ length: no_of_issues }).map((_, index) => (
            <div
              className="issuesBox-technicianPage issuesBox-adminPage"
              onClick={() => {
                if (userType === "technician") {
                  setShowDetails(true);
                }
              }}
            >
              <div className="issueID">#0011</div>
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
          ))} */}

          {(viewPending ? pendingIssues : completedIssues).map((issues) => (
            <div
              className="issuesBox-technicianPage issuesBox-adminPage"
              id={issues.id}
              onClick={(e) => {
                if (userType === "admin") {
                  setDeleteIssueID(e.currentTarget.id);
                }
                if (userType === "technician") {
                  setShowDetails(true);
                  setIssueSI(e.currentTarget.id);
                  // deleteIssueID(e.currentTarget.id);
                }
              }}
            >
              {/* <div className="issueID">#0011</div> */}
              <img src="" alt="" />
              <div className="serialNo">
                <p>S.I. No: </p>
                <span>{issues.id}</span>
              </div>
              <div className="reportedOn">
                <p>Reported on: </p>
                <span>{issues.created_at}</span>
              </div>
              <div className="title">
                <p>Title: </p>
                <span>{issues.title}</span>
              </div>
              <div className="description">
                <p>Description: </p>
                <span>{issues.description}</span>
              </div>
              <div className="classRoom">
                <p>Location: </p>
                <span>
                  {issues.campus}-{issues.room_number}
                </span>
              </div>
              <div
                className="techncianAssigned"
                style={{ display: userType === "admin" ? "visible" : "none" }}
              >
                <p>Technician: </p>
                <span>{issues.technician}</span>
              </div>
              <div className="priorityLevel">
                <p>Priority level: </p>
                <span>{issues.priority}</span>
              </div>
              <div
                className="issueStatus"
                style={{
                  backgroundColor:
                    issues.status === "In Process" ? "orange" : "green",
                }}
              >
                <p>{issues.status}</p>
              </div>
              <div
                className="deleteIssue"
                style={{ display: userType === "admin" ? "visible" : "none" }}
                id={issues.id}
                onClick={(e)=>{
                  setDeleteIssueID(e.currentTarget.id)
                  deleteIssue();

                }}
              >
                Delete Issue!!
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {showDetails && <div className="showDetails"><DetailsOfIssues setShowDetails={setShowDetails} /></div>} */}
    </div>
  );
}

export default IssuesContainer;
