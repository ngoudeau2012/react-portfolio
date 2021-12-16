import React from "react";
import {useTheme} from "../ThemeContext"
import "./style.css"

function Footer(){
    const darkTheme = useTheme()

    const themeClass = darkTheme ? "footer" : "dark footer"

    return (
        <div className={themeClass}>
             <div>
                 Designed and Developed by <span className="block">Nick Goudeau</span>
                </div>
             <div className="flex">
                <a href="https://www.linkedin.com/in/nicholasgoudeau/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/ngoudeau2012" target="_blank"><i class="fab fa-github"></i></a>
                <a href="mailto:ngoudeau2012@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
             </div>
        </div>
    )
}

export default Footer;