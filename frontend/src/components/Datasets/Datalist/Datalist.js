import React, { useState, useEffect } from "react";

import "./Datalist.css";
//import axios from 'axios'; // You may need to install axios: npm install axios

//icons
import SearchIcon from "@mui/icons-material/Search";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";

function Datalist() {
  const [datasets, setDatasets] = useState([]);
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            "http://127.0.0.1:8000/api/profileset/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ number: 6 }), // Send the 'count' in the request body
            }
          );
          const apiData = await response.json();
            
            const dataArray = new Array(Math.max(...apiData.map(item => item.id)) + 1);
            apiData.forEach(item => { dataArray[item.id] = item })
            setDatasets([{id:1},{id:2}]);
        } catch (error) {
          console.error("Error fetching data:", error);
          setDatasets([]);
        }
      }

      fetchData();
    }, []);
  const handleButtonClick = (action) => {
    // Implement actions based on the button clicked
    switch (action) {
      case "search":
        alert("Search button clicked");
        break;
      case "folder":
        alert("Folder button clicked");
        break;
      case "delete":
        alert("Delete button clicked");
        break;
      case "download":
        alert("Download button clicked");
        break;
      case "settings":
        alert("Settings button clicked");
        break;
      default:
        break;
    }
  };

  const handleFolderClick = (folderId) => {
    // Implement the action when a folder is clicked
    console.log(`Clicked on folder ${folderId}`);
  };

  return (
    <div className="bigboxCG">
      <div className="headCG">
        <ul className="leftlist">
          <li>
            <h3 id="boxTitle">Datasets</h3>
          </li>
        </ul>

        <ul className="rightlist">
          <li>
            <button onClick={() => handleButtonClick("search")}>
              <SearchIcon style={{ fontSize: 24, color: "black" }} />
            </button>
            <button onClick={() => handleButtonClick("folder")}>
              <FolderIcon style={{ fontSize: 24, color: "black" }} />
            </button>
            <button onClick={() => handleButtonClick("delete")}>
              <DeleteIcon style={{ fontSize: 24, color: "black" }} />
            </button>
            <button onClick={() => handleButtonClick("download")}>
              <CloudDownloadIcon style={{ fontSize: 24, color: "black" }} />
            </button>
            <button onClick={() => handleButtonClick("settings")}>
              <SettingsIcon style={{ fontSize: 24, color: "black" }} />
            </button>
          </li>
        </ul>
      </div>

      <div className="folder-buttons">
        {datasets.map((dataset) => (
          <IconButton
            aria-label="Folder"
            key={dataset.id}
            onClick={() => handleFolderClick(dataset.id)}
          >
            <FolderIcon style={{ fontSize: 48 }} />
          </IconButton>
        ))}
      </div>
    </div>
  );
}

export default Datalist;

