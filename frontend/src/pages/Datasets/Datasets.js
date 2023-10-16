import React from "react";
import "./Datasets.css";
import Parent from "../../components/Datasets/parent";

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
