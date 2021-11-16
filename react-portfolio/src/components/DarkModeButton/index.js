import React from "react"
import { ThemeProvider, useTheme, useThemeUpdate } from "../ThemeContext"
import "./style.css"

function DarkMode(){
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const themeClasses = darkTheme ? "light-mode-button" : "dark-mode-button"

    return(
        <div className={themeClasses} onClick={toggleTheme}>
        </div>
    )
    
}

export default DarkMode