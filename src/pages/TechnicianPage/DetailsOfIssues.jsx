import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

import "./TechnicianPage.css";

function DetailsOfIssues({ setShowDetails, issueSI }) {

  const [issueDetail, setIssueDetail] = useState([]);

  useEffect(() => {
    const getIssuesDetail = async () => {
      const { data, error } = await supabase
        .from("issues")
        .select("*")
        .eq("id", issueSI);

      if (error) return;
      console.log("IssueDetail: ", issueDetail);
      setIssueDetail(data);
    };

    if (issueSI) {
      getIssuesDetail();
    }
  }, [issueDetail,issueSI]);

const markAsCompleted = async () => {
  console.log("Issue ID:", issueSI);

  const { error } = await supabase
    .from("issues")
    .update({ status: "Completed" })
    .eq("id", issueSI);

  if (error) {
    console.error("Update error:", error);
    return;
  }


};

  if (!issueSI || issueDetail.length === 0) {
    return null;
  }

  return (
    <div
      className="details-container-bg"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
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
          <div className="serialNo">
            <p>S.I. No: </p>
            <span>{issueDetail[0].id}</span>
          </div>
          <div className="reportedOn">
            <p>Reported on: </p>
            <span>{issueDetail[0].created_at}</span>
          </div>
          <div className="title">
            <p>Title: </p>
            <span>{issueDetail[0].title}</span>
          </div>
          <div className="description">
            <p>Description: </p>
            <span>{issueDetail[0].description}</span>
          </div>
          <div className="classRoom">
            <p>Location: </p>
            <span>
              {issueDetail[0].campus}-{issueDetail[0].room_number}
            </span>
          </div>
          <div className="techncianAssigned">
            <p>Technician: </p>
            <span>{issueDetail[0].technician}</span>
          </div>
          <div className="priorityLevel">
            <p>Priority level: </p>
            <span>{issueDetail[0].priority}</span>
          </div>
          <div
            className="issueStatus"
            style={{
              backgroundColor:
                issueDetail[0].status === "In Process" ? "orange" : "green",
            }}
          >
            <p>{issueDetail[0].status}</p>
          </div>
          <button
            className="solved-btn"
            onClick={() => {
              markAsCompleted();
              setShowDetails(false);
              alert("Issue is solved!!");
            }}
          >
            Solved✅
          </button>
        </div>

        <div className="issue-solve">{/* <button>solved✅</button> */}</div>
      </div>
    </div>
  );
}

export default DetailsOfIssues;
