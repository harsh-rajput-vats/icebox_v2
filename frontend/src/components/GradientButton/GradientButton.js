import React from "react";
import "./GradientButton.css";

const GradientButton = ({ onClick, text, icon }) => {
  return (
    <button className="gradient-button" onClick={onClick}>
      {text}

      <svg className="arrow">
        <use href={`${icon}#right_arrow`}></use>
      </svg>
      <span className="ight_arrow"></span>
    </button>
  );
};

export default GradientButton;
