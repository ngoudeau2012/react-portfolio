import React from "react";
import ProjectCard from "../ProjectCard"
import "./style.css"

function ProjectPortfolio(){
    return(
        <div>
            <div className="header">
                <h1 className="sectionHeader">Project Portfolio</h1>
            </div>
            <hr />
            <ProjectCard />
        </div>
    )
}
export default ProjectPortfolio;