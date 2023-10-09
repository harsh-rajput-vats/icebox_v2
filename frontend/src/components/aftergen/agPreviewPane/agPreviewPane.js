import React from "react";
import "./PreviewPane.css";

function PreviewPane() {
  const button = () => {
    alert("YO");
  };

  return (
    <div className="bigboxPP">
      <div className="headPP">
        <ul className="leftlistPP">
          <li>
            <h3 id="boxTitlePP">Preview Pane</h3>
          </li>
        </ul>
      </div>
      <div className="bodyPP"></div>
    </div>
  );
}

export default PreviewPane;
