import React from "react"
import ProjectCard from "../ProjectCard";
import "./style.css"

function Skills(){
    return(
        <div>
            <div className="header">
                <h1 className="sectionHeader">Skills</h1>
            </div>
            <hr/>
            <div className="card">
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
        </div>
    );
}

export default Skills;