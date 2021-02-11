import React from "react";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="box">
      <a href="https://instagram.com/herotic_oslo">
        <img src="/instagram.svg" alt="" className="icon" />
      </a>
      {"\u00A0"}
      {"\u00A0"}
      <a href="mailto:herotic.oslo@gmail.com">
        <img src="/gmail.svg" alt="" className="icon" />
      </a>
    </div>
  );
};

export default Socials;
