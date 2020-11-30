import React from "react";
import beats from "../img/beats.png";

export default function Headphones() {
  return <img style={beatsStyle} src={beats} />;
}

const beatsStyle = {
  width: "210px",
  height: "158px"
};