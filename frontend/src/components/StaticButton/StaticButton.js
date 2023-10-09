import React, { useState } from "react";
import "./StaticButton.css";

const IconButton = ({ onClick, SVGIcon, id }) => {
  const [darkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <button
        className={`static-button ${darkMode ? "darkMode" : "lightMode"}`}
        onClick={() => {
          onClick();
        }}
      >
        <svg className="child">
          <use href={`${SVGIcon}#${id}`}></use>
        </svg>
        <span className={id}></span>
      </button>
    </div>
  );
};

export default IconButton;
