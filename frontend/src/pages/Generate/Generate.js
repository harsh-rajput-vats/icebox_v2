import React from "react";
import "./Generate.css";
import GenerateData from "../../components/GenerateNew/Generate Data/GenerateData"
import CustomGeneration from "../../components/GenerateNew/CustomGeneration/CustomGeneration"
import DatasetExplorer from "../../components/GenerateNew/DatasetExplorer/DatasetExplorer"
import PreviewPane from "../../components/GenerateNew/PreviewPane/PreviewPane"

function MainContent() {
  const proceedClick = () => {
    alert("Lets get started!");
    // More functionality logic later
  };
  return (
    <div className="container">
      <div className="top">
        <div className="top-left">
          <GenerateData />
        </div>
        <div className="top-right">
          <CustomGeneration />
        </div>
      </div>
      <div className="bot">
        <div className="bot-left">
          <DatasetExplorer />
        </div>
        <div className="bot-right">
          <PreviewPane />
        </div>
      </div>
    </div>
  );
}

export default MainContent;