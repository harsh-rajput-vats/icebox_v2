import React from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { withRouter } from "react-router-dom";
import "./Sidebar.css";
import MyIconButton from "../IconButton/IconButton";
import Home from "../../assets/Icons/home.svg";
import Search from "../../assets/Icons/search.svg";
import Job_Queue from "../../assets/Icons/stopwatch.svg";
import Datasets from "../../assets/Icons/datasets.svg";
import Info from "../../assets/Icons/info.svg";
import Logo from "../Logo/Logo";


function Sidebar() {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  

  const handleDataSetsClick = () => {
    navigate("/generate")
  };

  const handleSearchClick = () => {
    alert("Search Button Clicked!");
  };

  const handleJob_QueueClick = () => {
    alert("Job_Queue Button Clicked!");
  };
  const handleFAQClick = () => {
    alert("FAQ Button Clicked!");
  };
  return (
    <div className="sidebar">
      {/* First List */}

      <ul className="top-list">
        <li className="app-logo">
          <Logo />
        </li>
      </ul>

      {/* Second List */}
      <ul className="middle-list">
        <li>
          <MyIconButton
            onClick={handleHomeClick}
            SVGIcon={Home}
            id="home"
          />
        </li>
        <li>
          <MyIconButton
            
            onClick={handleDataSetsClick}
            SVGIcon={Datasets}
            id="datasets"
          />
        </li>
        <li>
          <MyIconButton
            onClick={handleSearchClick}
            SVGIcon={Search}
            id="search"
          />
        </li>
        <li>
          <MyIconButton
            onClick={handleJob_QueueClick}
            SVGIcon={Job_Queue}
            id="Job_Queue"
          />
        </li>
      </ul>

      {/* Third List */}
      <ul className="bottom-list">
        <li>
          <MyIconButton
            onClick={handleFAQClick}
            SVGIcon={Info}
            id="info"
          />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;