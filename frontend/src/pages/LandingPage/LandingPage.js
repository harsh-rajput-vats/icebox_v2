import React from "react";
import "./LandingPage.css";
import GradientButton from "../../components/GradientButton/GradientButton";
import InIcebox from "../../assets/Images/InIcebox.svg";
import ArrowIcon from "../../assets/Icons/right_arrow.svg";

function MainContent() {
  const proceedClick = () => {
    alert("Lets get started!");
    // More functionality logic later
  };
  return (
    <div className="MainContent">
      <div className="left">
        <div className="tg">
          <p className="tag">
            Create lifelike synthetic user profiles{" "}
            <span class="one">effortlessly</span>
          </p>
        </div>
        <div className="description">
          <p className="desc">
            Harness the precision of rule-based generation for creating
            authentic synthetic user profiles across diverse demographics.
          </p>
        </div>

        <div className="button">
          <GradientButton
            onClick={proceedClick}
            text="Get Started"
            icon={ArrowIcon}
          />
        </div>
      </div>
      <div className="right">
        <div className="graphic">
          <img src={InIcebox} alt="Inside of Icebox" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
