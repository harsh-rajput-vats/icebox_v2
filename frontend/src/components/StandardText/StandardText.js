import { React, useState } from "react";
import "./StandardText.css"
function StandardText(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = () => {
    document.getElementById("inputLabel").classList.add("active");
  };

  return (
    <div className="input-container">
      <div id="inputLabel" className={`label ${inputValue ? "active" : ""}`}>
        Dataset Name
      </div>
      <input
        type="text"
        id="inputField"
        name="datasetName"
        onClick={handleInputClick}
        onChange={handleInputChange}
        value={inputValue}
        required
      />
    </div>
  );
}

export default StandardText;
