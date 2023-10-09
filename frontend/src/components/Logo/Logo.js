import React from "react";
import logoImage from "../../assets/Images/Icebox_logo.svg"; 
import "./Logo.css"
function Logo() {
  const handleLogoClick = () => {
    alert("Logo Clicked!");
  };

  return (
    <div>
      {/* Clickable Logo Button */}
      <a href="/" onClick={handleLogoClick}>
        <img className="logo" src={logoImage} alt="Icebox" />
      </a>
    </div>
  );
}

export default Logo;
