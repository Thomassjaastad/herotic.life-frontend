import React from "react";
import Socials from "./Socials";
import "./Bjorg.css";

const Contact = () => {
  return (
    <div>
      <strong>
        <a className="urlcenter" href="mailto:herotic.oslo@gmail.com">
          {" "}
          herotic.oslo@gmail.com
        </a>
      </strong>
      <hr />
      <Socials />
      <hr style={{ width: `100%`, marginTop: `15em` }} />
    </div>
  );
};

export default Contact;
