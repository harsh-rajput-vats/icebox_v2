import React from "react"
import "./DatasetExplorer.css"

function DatasetExplorer() {
    
    const button = () => {
        alert("YO");
    };

    return (
      <div className="bigboxDE">
        <div className="headDE">
          <ul className="leftlistDE">
            <li>
              <h3 id="boxTitleDE">Dataset Explorer</h3>
            </li>
          </ul>
        </div>
        <div className="bodyDE"></div>
      </div>
    );

}

export default DatasetExplorer;