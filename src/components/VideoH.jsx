import React from "react";
import "./styles/videoH.css";

export default function VideoH(props) {
  return (
    <div className="videoH">
      <img src={props.link} alt="" />
    </div>
  );
}
