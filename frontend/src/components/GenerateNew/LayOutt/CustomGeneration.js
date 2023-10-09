import React from "react";
import "./CustomGeneration.css";

function CustomGeneration() {
  const button = () => {
    alert("YO");
  };

  return (
    <div className="bigbox">
      <div className="head">{/* <p>hello</p> */}</div>
      <div className="body"></div>
    </div>
  );
}

export default CustomGeneration;
