import React, {useState} from "react";
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

  const [isImg, setIsImg] = useState(false);
  const [value, setValue] = useState(null);
  const [profiles,setProfiles]=useState([]);
  
  const [profilename,setProfilename]=useState(null);
  const [count,setCount] = useState(null);
  return (
    <div className="container">
      <div className="top">
        <div className="top-left">
          <Datalist profiles={setProfiles} profilename={setProfilename} setCount={setCount}/>
        </div>
        <div className="top-right">
          <Graph profilename={profilename} count={count}/>
        </div>
      </div>
      <div className="bot">
        <div className="bot-left">
          <SSExplorer setIsImg={setIsImg} setValue={setValue} profiles={profiles}/>
        </div>
        <div className="bot-right">
          <BR_PP isImg={isImg} value={value}/>
        </div>
      </div>
    </div>
  );
}

export default Parent;
