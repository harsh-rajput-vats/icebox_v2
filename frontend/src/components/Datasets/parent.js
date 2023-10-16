import React from "react";
import "./parent.css";
import Datalist from "./TL_Datalist/Datalist";
import Graph from "./TR_DetailsGraph/Graph";
import SSExplorer from "./BL_SingleSet/SSExplorer";
import BR_PP from "./BR_PP/BR_PP";

function Parent() {
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
          <Graph />
        </div>
      </div>
      <div className="bot">
        <div className="bot-left">
          <SSExplorer />
        </div>
        <div className="bot-right">
          <BR_PP />
        </div>
      </div>
    </div>
  );
}

export default Parent;
