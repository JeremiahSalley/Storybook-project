import React from "react";
import hot from "../img/label.png";

export default function Hot() {
  return <img style={hotStyle} src={hot} />;
}

const hotStyle = {
  height: "20px",
  width: "40px"
};