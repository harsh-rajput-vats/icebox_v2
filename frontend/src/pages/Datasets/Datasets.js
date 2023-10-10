import React from "react";
import "./Datasets.css";
import GenerateData from "../../components/GenerateNew/Generate Data/GenerateData";
import CustomGeneration from "../../components/GenerateNew/CustomGeneration/CustomGeneration";
import DatasetExplorer from "../../components/GenerateNew/DatasetExplorer/DatasetExplorer";
import PreviewPane from "../../components/GenerateNew/PreviewPane/PreviewPane";
import Datalist from "../../components/Datasets/Datalist/Datalist";

function MainContent() {
  const proceedClick = () => {
    alert("Lets get started!");
    // More functionality logic later
  };
  return (
    <div className="container">
      <div className="top">
        <div className="top-left">
          <Datalist />
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
