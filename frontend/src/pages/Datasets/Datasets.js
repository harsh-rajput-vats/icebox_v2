import React from "react";
import "./Datasets.css";
import Parent from "../../components/Datasets/Parent";

function MainContent() {
  const proceedClick = () => {
    alert("Lets get started!");
  };
  return (
    <div className="container">
      <Parent />
    </div>
  );
}

export default MainContent;
