import React from "react";
import "./stylesheet.css";

function Stylesheet(props) {
  let value = props.primary ? "primary" : "";
  return <div className={`${value} font-xl`}>Stylesheet</div>;
}

export default Stylesheet;
