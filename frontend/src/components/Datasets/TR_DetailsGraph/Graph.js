import React from "react";
import "./Graph.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Graph() {
  function createData(group, gender, ageGrp, profilesNum, button) {
    return { group, gender, ageGrp, profilesNum, button };
  }

  const rows = [
    createData("South", "Any", "20-50", 2, 4.0),
    createData("North", "Male", "20-30", 3, 4.3),
  ];

  const button = () => {
    alert("YO");
  };
  const [value, setValue] = React.useState("rules");

  const handleMenuChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bigboxCG">
      <div className="headCG">
        <ul className="leftlistCG">
          <li>
            <h3 id="boxTitleCG">Dataset Details</h3>
          </li>
        </ul>
      </div>
      <div className="bodyCG">
        
      </div>
    </div>
  );
}

export default Graph;
