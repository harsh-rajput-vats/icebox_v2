import React from "react";
import "./CustomGeneration.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomGeneration() {
  

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
  const [value, setValue] = React.useState('rules');

  const handleMenuChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bigboxCG">
      <div className="headCG">
        <ul className="leftlistCG">
          <li>
            <h3 id="boxTitleCG">Custom Generation Settings</h3>
          </li>
        </ul>
      </div>
      <div className="bodyCG">
        <div className="options">
          <Box sx={{ width: "80%" }}>
            <Tabs
              value={value}
              onChange={handleMenuChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              size="small"
            >
              <Tab value="rules" label="Rules" />
              <Tab value="distribution" label="Distribution" />
            </Tabs>
          </Box>
        </div>

        <div className="rulestable">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              color="secondary"
            >
              <TableHead style={{ background: "#DED6FF" }}>
                <TableRow>
                  <TableCell>Group</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Age Group</TableCell>
                  <TableCell>Profile(s)</TableCell>
                  <TableCell> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ background: "#DED6FF" }}>
                {rows.map((row) => (
                  <TableRow
                    key={row.group}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.group}
                    </TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>{row.ageGrp}</TableCell>
                    <TableCell>{row.profilesNum}</TableCell>
                    <TableCell>{row.button}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="actionBar"></div>
      </div>
    </div>
  );
}

export default CustomGeneration;
