import React from "react";
import "./agPreviewPane.css";

function PreviewPane({
  isImg,value
}) {
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
      <div className="bodyPP">
        {isImg === true?
        <span>{value}</span>
        :
      <img src={value} />
        }
      </div>
    </div>
  );
}

export default PreviewPane;
