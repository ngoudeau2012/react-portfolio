import React from "react";
import "./Navbar.css";
import DarkMode from "../DarkModeButton";
import resume from "../../assets/images/resume.pdf";
import { useTheme } from "../ThemeContext";
import headshot from "../../assets/images/headshot1.png"

function Nav() {
  const darkTheme = useTheme();

  const themeClass = darkTheme ? "navbar" : "dark navbar";

  console.log(darkTheme);
  return (
    <div>
      <nav
        className={themeClass}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          {/* <h1 className="navbarName">NG</h1> */}
          <div className="image-crop">
                <img src={headshot}/>
            </div>
        
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="colored-banner">

      </div>
    </div>
  );
}
export default Nav;
