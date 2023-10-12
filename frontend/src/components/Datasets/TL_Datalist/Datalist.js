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

function Datalist({
  profiles,profilename,setCount
}) {
  const [datasets, setDatasets] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/profilesets/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
      // Send the 'count' in the request body
        });
        const apiData = await response.json();
        setDatasets(apiData)
        // setDatasets([{ id: 1 }, { id: 2 }]);
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
  async function fetchProfiles(id) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/profileset/${id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
    // Send the 'count' in the request body
      });
      const apiData = await response.json();
      profiles(apiData.profiles)
      setCount((apiData.profiles.length))
      // setDatasets([{ id: 1 }, { id: 2 }]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDatasets([]);
    }
  }

  const handleFolderClick = (folderId) => {
    fetchProfiles(folderId.id);
    profilename(folderId.name);

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
            onClick={() => handleFolderClick(dataset)}
          >
            <div className="dataset-icon-name">
            <FolderIcon style={{ fontSize: 48 }} />
            {dataset.name}
            </div>
          </IconButton>
          
          
        ))}
      </div>
    </div>
  );
}

export default Datalist;
