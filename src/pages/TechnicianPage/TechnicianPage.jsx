import { useState } from "react";

import "./TechnicianPage.css";

import DetailsOfIssues from "./DetailsOfIssues";
import IssuesContainer from "../../Components/IssuesContainer/IssuesContainer";

function TechnicianPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <IssuesContainer
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
      {showDetails && (
        <div className="showDetails">
          <DetailsOfIssues setShowDetails={setShowDetails} />
        </div>
      )}
    </div>
  );
}

export default TechnicianPage;
