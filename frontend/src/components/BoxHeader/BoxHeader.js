import React from "react";

const BoxHeader = ({ leftElements, rightElements }) => {
  return (
    <div className="box-header">
      <div className="left-elements">
        {leftElements.map((element, index) => (
          <span key={index}>{element}</span>
        ))}
      </div>
      <div className="right-elements">
        {rightElements.map((element, index) => (
          <span key={index}>{element}</span>
        ))}
      </div>
    </div>
  );
};

export default BoxHeader;