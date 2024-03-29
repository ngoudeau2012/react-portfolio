import React from "react";
import ProjectCard from "../ProjectCard";
import "./style.css";
import DarkModeButton from "../DarkModeButton"
import DarkMode from "../DarkModeButton";
import {useTheme} from "../ThemeContext"

function Skills() {

  const darkTheme = useTheme();

  const themeClass = darkTheme ? "skills-section" : "dark skills-section";

  return (
    <div class={themeClass}>
      <div className="header">
        <h1 className="sectionHeader">Skills</h1>
      </div>
      <hr />
      <div class="flex">
        <div className="skills card">
          <h1 className="sectionHeader">Front-end</h1>
          <ul>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Flexbox</li>
            <li>Flexgrid</li>
            <li>XWiki</li>
          </ul>
        </div>
        <div className="skills card">
          <h1 className="sectionHeader">Back-end</h1>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>AJAX/AXIOS</li>
            <li>Handlebars</li>
          </ul>
        </div>
      </div>
      <div className="header">
                <h1 className="sectionHeader">Experience</h1>
            </div>
            <hr/>
            <div className="experience card">
                <div className="sectionHeader">Amazon <span className="job-title"></span></div>
                <div className="job-title">Lead Developer | GREF Hub Online</div>
                <div className="discription">Lead developer for the GREF Hub Online platform </div>
                <ul>
                  <li>
                    
                  </li>
                    <li>Led development of component and template galleries allowing for agile development and migration of wiki pages to meet
the new brand guidelines of GREF.</li>
                </ul>
            </div>
    </div>
  );
}

export default Skills;
