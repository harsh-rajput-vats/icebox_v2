import React from "react";
import { useDarkMode, useToggleDarkMode } from "../../contexts/ThemeContext";
import "./Navbar.css";
import IconButton from "../IconButton/IconButton";
import ProfileIcon from "../../assets/Icons/profile.svg";
import InLightIcon from "../../assets/Icons/moon.svg";
import InDarkIcon from "../../assets/Icons/sun.svg";
import LogoutIcon from "../../assets/Icons/logout.svg";

function Navbar() {
  const darkMode = useDarkMode();
  const toggleDarkMode = useToggleDarkMode();

  let ThemeIcon = InLightIcon;

  function changeThemeIcon(night) {
    if (night) {
      console.log("icon changed1");

      return InLightIcon;
    } else {
      console.log("icon changed2");

      return InDarkIcon;
    }
  }
  const handleProfileClick = () => {
    alert("Profile Button Clicked");
  };

  const handleThemeClick = () => {
    toggleDarkMode();
    ThemeIcon = changeThemeIcon(darkMode);
    console.log("Button Clicked");
    console.log(ThemeIcon);
    alert("Theme Button Clicked");
  };

  const handleLogoutClick = () => {
    alert("Logout Button Clicked!");
  };
  return (
    <nav className="navbar">
      <ul className="left-list">
        <li>
          <h3 id="projectName">ICEBOX</h3>
        </li>
        <li>
          <h4 id="pageName">Configurator</h4>
        </li>
      </ul>

      {/* Right List */}
      <ul className="right-list">
        <li>
          <IconButton
            onClick={handleProfileClick}
            SVGIcon={ProfileIcon}
            id="profile"
          />
        </li>
        <li>
          <IconButton
            onClick={handleThemeClick}
            SVGIcon={ThemeIcon}
            // id = "theme"
            id={`${ThemeIcon === InLightIcon ? "moon" : "sun"}`}
          />
        </li>
        <li>
          <IconButton
            onClick={handleLogoutClick}
            SVGIcon={LogoutIcon}
            id="logout"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
