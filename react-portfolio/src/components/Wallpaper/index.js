import React, { Children } from "react"
import "./style.css"
import {useTheme} from "../ThemeContext"

function Wallpaper(props){
    const darkTheme = useTheme()

    const themeClass = darkTheme ? "background" : "dark background"

    return(
        <div className={themeClass}>
            {props.children}
        </div>
    )
}

export default Wallpaper