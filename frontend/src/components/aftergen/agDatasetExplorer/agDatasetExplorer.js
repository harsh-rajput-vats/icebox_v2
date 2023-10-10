import React, { useState, useEffect } from "react";
import "./agDatasetExplorer.css";
// import TreeComp from "../../../components/aftergen/agDatasetExplorer/TreeComp/TreeComp"
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

function DatasetExplorer() {
  const button = () => {
    alert("YO");
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("your-django-api-url");
        const apiData = await response.json();
        setData(apiData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bigboxDE">
      <div className="headDE">
        <ul className="leftlistDE">
          <li>
            <h3 id="boxTitleDE">Dataset Explorer</h3>
          </li>
        </ul>
        <div className="agTree">
          <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              {data.map((uidData) => (
                <TreeItem
                  key={uidData.id}
                  nodeId={uidData.id.toString()}
                  label={uidData.name}
                >
                  {uidData.images.map((imageData) => (
                    <img
                      key={imageData.id}
                      src={imageData.url}
                      alt={imageData.name}
                    />
                  ))}
                </TreeItem>
              ))}
            </TreeView>
          </Box>
        </div>
      </div>
      <div className="bodyDE"></div>
    </div>
  );
}

export default DatasetExplorer;

// const nodes = [
//   {
//     uid: 1234567891230,
//     demo: {
//       pname: "John Doe",
//       gender: "male",
//       dob: "12/11/2000",
//       address: {
//         line1: "Flat 101, New Street, Pragati Ground",
//         line2: "Dwarka",
//         city: "Bengaluru",
//         state: "KA",
//         pincode: "245832",
//       },
//     },
//     bio: {
//       face: "john_doe_face.jpg",
//       iris: {
//         left: "john_doe_left_iris.jpg",
//         right: "john_doe_right_iris.jpg",
//       },
//       fingerprint: {
//         left: {
//           f1: "john_doe_finger1.jpg",
//           f2: "john_doe_finger2.jpg",
//           f3: "john_doe_finger3.jpg",
//           f4: "john_doe_finger4.jpg",
//           f5: "john_doe_finger5.jpg",
//         },
//         right: {
//           f1: "john_doe_finger1.jpg",
//           f2: "john_doe_finger2.jpg",
//           f3: "john_doe_finger3.jpg",
//           f4: "john_doe_finger4.jpg",
//           f5: "john_doe_finger5.jpg",
//         },
//       },
//     },
//   },
//   // Add more nodes with different data as needed
// ];
