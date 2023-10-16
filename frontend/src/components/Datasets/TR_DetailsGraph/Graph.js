import React from "react";
import "./Graph.css";
import RadarChart from "../../../assets/Images/RadarChart.png";

function Graph() {
  
  return (
    <div className="bigboxCG">
      <div className="headCG">
        <ul className="leftlistCG">
          <li>
            <h3 id="boxTitleCG">Dataset Details</h3>
          </li>
        </ul>
      </div>
      <div className="bodyCG bodyDS">
        <div className="data-details">
          <h3>Name of Dataset: </h3>
          <h3>Number of IDs: </h3>
        </div>
        <div>
          {profilename ? (<img className="chart-img" src={RadarChart} alt="Chart image" />) : <div></div> }
        </div>
      </div>
    </div>
  );
}

export default Graph;
