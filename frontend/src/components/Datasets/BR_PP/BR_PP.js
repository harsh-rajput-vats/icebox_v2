import React from "react";
import "./BR_PP.css";

function BR_PP({ isImg, value }) {
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
        <div className="value-container">
          {isImg === true ? <span>{value}</span> : <img src={value} />}
        </div>
      </div>
    </div>
  );
}

export default BR_PP;