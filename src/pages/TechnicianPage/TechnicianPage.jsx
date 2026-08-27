import { useState } from "react";


import "./TechnicianPage.css";

import DetailsOfIssues from "./DetailsOfIssues";
import IssuesContainer from "../../Components/IssuesContainer/IssuesContainer";



function TechnicianPage() {


  const [showDetails, setShowDetails] = useState(false);

  const [issueSI, setIssueSI] = useState("");


  return (
    <div>
      <IssuesContainer
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        setIssueSI={setIssueSI}
      />
      {showDetails && (
        <div className="showDetails">
          <DetailsOfIssues setShowDetails={setShowDetails} issueSI={issueSI}/>
        </div>
      )}
    </div>
  );
}

export default TechnicianPage;
