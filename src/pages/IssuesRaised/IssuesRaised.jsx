import React, { useEffect, useState } from "react";

import GetUser from "../../functions/GetUser";

import "./IssuesRaised.css";

import Navbar from "../../Components/navbar/navbar";
import Footer from "../../Components/footer/footer";

import { supabase } from "../../lib/supabase";

function History() {
  const user = GetUser();

  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const getMyIssues = async () => {
      const { data, error } = await supabase
        .from("issues")
        .select("*")
        .eq("email", user?.email);

      if (error) return;
      console.log(issues);
      setIssues(data);
    };

    if (user?.email) {
      getMyIssues();
    }
  }, [user?.email]);

  return (
    <div className="main1">
      <Navbar />
      <div className="main2">
        {/* {getMyIssues} */}
        <div className="history">
          {/* <div className="issuesBox">
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
              <span>this is description</span>
            </div>
            <div className="issueStatus">
              <p>IN PROCESS</p>
            </div>
          </div> */}

          {issues.map((issue) => (
            
            <div className="issuesBox" key={issue.id}>
              <img src="" alt="" />
              <div className="reportedOn">
                <p>Reported on: </p>
                <span>{issue.created_at}</span>
              </div>

              <div className="componentName">
                <p>Component Name: </p>
                <span>{issue.component_name}</span>
              </div>

              <div className="componentTitle">
                <p>Title: </p>
                <span>{issue.title}</span>
              </div>

              <div className="description">
                <p>Description: </p>
                <span>{issue.description}</span>
              </div>

              <div className="classRoom">
                <p>Location: </p>
                <span>
                  {issue.campus}-{issue.room_number}
                </span>
              </div>

              <div className="techncianAssigned">
                <p>Technician: </p>
                <span>{issue.technician || "Not assigned"}</span>
              </div>

              <div className="priorityLevel">
                <p>Priority level: </p>
                <span>{issue.priority}</span>
              </div>

              <div className="issueStatus" style={{backgroundColor: issue.status === "In Process" ? 'orange' : 'green'}}>
                <p>{issue.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default History;
