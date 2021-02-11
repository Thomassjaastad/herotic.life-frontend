import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";

const Video = () => {
  return (
    <div>
      <strong className="heroticFall"> Herotic - Welcome to paradise</strong>
      <div className="container">
        <ReactPlayer url="https://vimeo.com/276117504" controls="true" />
      </div>
    </div>
  );
};

export default Video;
