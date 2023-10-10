import React from "react";
import "./aftergen.css";
import AGGenerateData from "../../components/aftergen/agGenerate Data/agGenerateData";
import AGCustomGeneration from "../../components/aftergen/agCustomGeneration/agCustomGeneration";
// import AGDatasetExplorer from "../../components/aftergen/agDatasetExplorer/agDatasetExplorer"
// import AGPreviewPane from "../../components/aftergen/agPreviewPane/agPreviewPane";
import Rushabh from "../../components/aftergen/rushabh/Rushabh"

function MainContent() {
  
  return (
    <div className="container">
      <div className="top">
        <div className="top-left">
          <AGGenerateData/>
        </div>
        <div className="top-right">
          <AGCustomGeneration />
        </div>
      </div>
        <Rushabh/>
    </div>
  );
}

export default MainContent;
