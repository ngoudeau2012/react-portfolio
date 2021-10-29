import React from "react";
import ProjectCard from "../ProjectCard"
import Skills from "../Skills"
import "./style.css"

function ProjectPortfolio(){
    return(
        <div  className="flex">
            <div className="portfolio-section">
                <div className="header">
                    <h1 className="sectionHeader">Project Portfolio</h1>
                </div>
                <hr/>
                <div>
                    <ProjectCard />
                </div>
            </div>
            <Skills />
            
           
        
        </div>
    )
}
export default ProjectPortfolio;