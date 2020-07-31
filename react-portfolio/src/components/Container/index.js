import React from "react";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} style={{maxWidth:"80%"}}/>;
}

export default Container;