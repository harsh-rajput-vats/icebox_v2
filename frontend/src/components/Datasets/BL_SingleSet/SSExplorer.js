import React, { useState, useEffect } from "react";
import "./SSExplorer.css";
// import TreeComp from "../../../components/aftergen/agDatasetExplorer/TreeComp/TreeComp"
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

function SSExplorer({setIsImg, setValue,profiles}) {
  const button = () => {
    alert("YO");
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/generate-profiles/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ number: 12 }),
          }
        );
        const apiData = await response.json();
        setData(apiData.profiles);
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
            <h3 id="boxTitleDE">Specific Dataset Name</h3>
          </li>
        </ul>
      </div>
      <div className="bodyDE">
        <div className="agTree">
          <Box
            sx={{
              width: "350px",
              minHeight: 180,
              flexGrow: 1,
              overflow: "auto", // Enable vertical and/or horizontal scrollbars as needed
              maxHeight: "300px",
            }}
          >
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              {profiles.map((uidData) => (
                <TreeItem nodeId={`1${uidData.id}`} label={uidData.uid}>
                  <TreeItem
                    nodeId={`2${uidData.id}`}
                    label="Demographics"
                    onClick={() => {
                      setIsImg(true);
                      setValue(uidData.name + "\n" + uidData.address);
                    }}
                  />
                  <TreeItem nodeId={`3${uidData.id}`} label="Biometrics">
                    <TreeItem
                      nodeId={`4${uidData.id}`}
                      label="Face"
                      onClick={() => {
                        setIsImg(false);
                        setValue(uidData.face_path);
                      }}
                    />
                    <TreeItem
                      nodeId={`5${uidData.id}`}
                      label="Fingerprint1"
                      onClick={() => {
                        setIsImg(false);
                        setValue(uidData.fingerprint_1);
                      }}
                    />
                    <TreeItem
                      nodeId={`6${uidData.id}`}
                      label="Fingerprint2"
                      onClick={() => {
                        setIsImg(false);
                        setValue(uidData.fingerprint_2);
                      }}
                    />
                    <TreeItem
                      nodeId={`7${uidData.id}`}
                      label="Fingerprint3"
                      onClick={() => {
                        setIsImg(false);
                        setValue(uidData.fingerprint_3);
                      }}
                    />
                    <TreeItem
                      nodeId={`8${uidData.id}`}
                      label="Fingerprint4"
                      onClick={() => {
                        setIsImg(false);
                        setValue(uidData.fingerprint_4);
                      }}
                    />
                    <TreeItem
                      nodeId={`9${uidData.id}`}
                      label="Fingerprint5"
                      onClick={() => {
                        setIsImg(false);
                        setValue(uidData.fingerprint_5);
                      }}
                    />
                    <TreeItem
                      nodeId={`10${uidData.id}`}
                      label="Fingerprint6"
                      onClick={() => {
                        setIsImg(false);
                        setValue(uidData.fingerprint_6);
                      }}
                    />
                    <TreeItem
                      nodeId={`11${uidData.id}`}
                      label="Fingerprint7"
                      onClick={() => {
                        setIsImg(false);
                        setValue(uidData.fingerprint_7);
                      }}
                    />
                    <TreeItem
                      nodeId={`12${uidData.id}`}
                      label="Fingerprint8"
                      onClick={() => {
                        setIsImg(false);
                        setValue(uidData.fingerprint_8);
                      }}
                    />
                    <TreeItem
                      nodeId={`13${uidData.id}`}
                      label="Fingerprint9"
                      onClick={() => {
                        setIsImg(false);
                        setValue(uidData.fingerprint_9);
                      }}
                    />
                    <TreeItem
                      nodeId={`14${uidData.id}`}
                      label="Fingerprint10"
                      onClick={() => {
                        setIsImg(false);
                        setValue(uidData.fingerprint_10);
                      }}
                    />
                  </TreeItem>
                </TreeItem>
              ))}
            </TreeView>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default SSExplorer;