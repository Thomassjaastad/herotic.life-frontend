import React from "react";
import Bjorg from "./Bjorg";
import F5 from "./F5";
import Video from "./Video";
import Socials from "./Socials";

import "./HorisontalLine.css";
const Archive = () => {
  return (
    <div>
      <Bjorg />
      <F5 />
      <hr />
      <Video />
      <hr />
      <Socials />
      <hr style={{ marginBottom: `5em`, marginTop: `2em`, width: `100%` }} />
    </div>
  );
};

export default Archive;
