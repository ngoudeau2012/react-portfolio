import React from "react";
import "./Navbar.css";
import DarkMode from "../DarkModeButton"
import resume from "../../assets/images/resume.pdf"
import {useTheme} from "../ThemeContext"

const darkTheme = useTheme()

const themeClass = darkTheme ? "dark navbar" : "navbar"

function Nav() {

  console.log(resume)
  return (
    <nav className={themeClass} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="navbarName">Nicholas Goudeau</h1>

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
              
              <a target="blank" class="button is-primary is-inverted is-outlined" href="https://www.linkedin.com/in/nicholasgoudeau/">LinkedIn</a>
              <a target="blank" className="button is-primary is-inverted is-outlined" href="https://github.com/ngoudeau2012">GitHub</a>
              <a target="blank" className="button is-primary is-inverted is-outlined" href={resume}>Resume</a>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
