import React, { useState } from "react";

import "./AdminPage.css";

// import GetUserType from '../../functions/GetUserType'

import IssuesContainer from "../../Components/IssuesContainer/IssuesContainer";
import TechniciansList from "../TechniciansList/TechniciansList";

import AdminNavbarComponents from "./AdminNavbarComponents"

function AdminPage() {
  const [showTechnicianList, setShowTechnicianList] = useState(false);

  let content;

  <AdminNavbarComponents setShowTechnicianList={setShowTechnicianList}/>
  if (!showTechnicianList) {
    content = <IssuesContainer />;
  } else {
    content = <TechniciansList/>;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default AdminPage;
