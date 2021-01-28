import React, { useEffect, useState } from "react";
import "./Button.css";

function Button(props) {
  const [classes, setClasses] = useState("");
  const { size, type, border, shadow } = props;
  useEffect(() => {
    let cls = "";
    if (size) {
      cls = `${cls} ${size}`;
    }
    if (type) {
      cls = `${cls} ${type}`;
    }
    if (border) {
      cls = `${cls} ${border}`;
    }
    if (shadow) {
      cls = `${cls} shadow`;
    }
    setClasses(`${cls}`);
  }, [size, type, border, shadow]);
  return (
    <button className={classes} {...props}></button>
  );
}

export default Button;
