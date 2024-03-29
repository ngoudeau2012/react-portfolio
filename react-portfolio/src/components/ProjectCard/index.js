import React from "react";
import * as Projects from "../../utils/projects.json";
import { useTheme } from "../ThemeContext";
import "./style.css"

function ProjectCard() {

  const darkTheme = useTheme();

  const themeClass = darkTheme ? "project-card" : "dark project-card";

  const projectsArr = Projects.default;
  return (
    <div class="flex">
      {projectsArr.map((project) => (
        <div className={themeClass}>
          <div className="left-side">
              <img src={project.Image}/>
          </div>
          <div className="right-side">
            <div className="text-section">
            <div className="project-name">{project.Name}</div>
            <div>{project.Description}</div>
            </div>
          <div className="link-buttons">
            <a href={project.gitHubRepo}>Repo</a>
            <a href={project.deployedApp}>LinktoPage</a>
          </div>
          </div>
          
        </div>

        // <div className="card is-desktop">
        //   <div className="card-image">
        //     <figure className="image is-16by9">
        //       <img
        //         className="has-ratio"
        //         width="250"
        //         src={project.Image}
        //         alt="Placeholder image"
        //       />
        //     </figure>
        //   </div>
        //   <div className="card-content">
        //     <div className="media">
        //       <div className="media-content">
        // <p className="title is-5">{project.Name}</p>
        //       </div>
        //     </div>

        //     <div className="content">
        //       {project.Description}
        //       <br />
        //     </div>
        //     <footer className="card-footer">
        //       <a href={project.gitHubRepo} className="card-footer-item">
        //         GitHub Repo
        //       </a>
        //       <a href={project.deployedApp} className="card-footer-item">
        //         Deployed App
        //       </a>
        //     </footer>
        //   </div>
        // </div>
      ))}
    </div>
  );
}

export default ProjectCard;
