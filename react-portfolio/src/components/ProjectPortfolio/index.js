import React from "react";
import ProjectCard from "../ProjectCard"
import Skills from "../Skills"
import {useTheme} from "../ThemeContext"
import "./style.css"

function ProjectPortfolio(){

    const darkTheme = useTheme();

    const themeClass = darkTheme ? "portfolio-section" : "dark portfolio-section";

    return(
        <div  className="flex">
            <div className={themeClass}>
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