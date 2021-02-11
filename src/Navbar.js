import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            {" "}
            store
          </Link>{" "}
        </li>
        <li>
          <Link
            to="/archive"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            archive{" "}
          </Link>{" "}
        </li>
        <li>
          <Link
            to="/contact"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            contact{" "}
          </Link>
        </li>
        <li>
          <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
            {" "}
            cart{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
