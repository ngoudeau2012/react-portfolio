import React from "react";
import headshot from "../../assets/images/headshot1.png"
import "./style.css"
import { useTheme } from "../ThemeContext";
import Resume from "../../assets/images/resume.pdf"

function AboutMe() {

  const darkTheme = useTheme();

  const themeClass = darkTheme ? "about-me-section" : "dark about-me-section";


  return (
    <div>
        <div className={themeClass}>
            
            <div className="text-section">
              <div className="name">
                Hi, I'm Nick
              </div>
              <div className="intro-text">
                Thank you for taking the time to view my information. In 2020, I ventured down a new career path after leaving a Sales Management position. I jumped into web development as a way to express my creative side and quickly fell in love. Since then, I've become certified in Full Stack Web Devlopement and now lead develpoment on an internal projet under Amazon's Global Real Estate devision. 
              </div>
              <div className="intro-text">
                I use this space to showcase my work, any professional work will be stripped of content to preserve Amazon's Internal Privacy Policy.
              </div>
            </div>
            <div className="image-div">
                <img src={headshot}/>
            </div>
            <div className="link-buttons">
                <a href="">LinkedIn</a>
                <a href="">GitHub</a>
                <a href={Resume} target="_blank">Resume</a>
                <a href="">Email</a>
            </div>
        </div>
       
    </div>
  );
}

export default AboutMe;
