import React from "react";
import img from "../../assets/images/headshot1.png"
import "./style.css"

function Headshot(){
    return(
    <p className="image centered">
            <img id="headshot" className="is-rounded"src={img} />
          </p>
    )
}

export default Headshot