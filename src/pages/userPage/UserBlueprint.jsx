import React from "react";
import { ReactComponent as C25BlockABlueprint } from "../../Assets/blueprints/c25_blockA-Model1_react.svg";

import "./userPage.css";

function UserBlueprint({ block }) {
  let SelectedBlock = block;
  const handleClick = (e) => {
    console.log(e.target.id);
  };
  return (
    <div className="main2">
      <div className="blueprint">
        {/* <div className="blueprintOverlay">{console.log(SelectedBlock)}</div> */}
        <div className="blueprint-container">
          {SelectedBlock === "A" && (
            <C25BlockABlueprint
              className="blueprint-svg"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default UserBlueprint;
