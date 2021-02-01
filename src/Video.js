import React from "react";
import ReactPlayer from "react-player";
import "./F5.css";

const Video = () => {
  return (
    <div>
      <h2 className="heroticFall"> Herotic - Welcome to paradise</h2>
      <ReactPlayer url="https://vimeo.com/276117504" controls="true" />
    </div>
  );
};

export default Video;
