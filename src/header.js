import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Link to="./">
        <img src="/mingle.png" alt="herotic" className="imagetop" />
      </Link>
      <div className="headercenter">
        <Navbar />
      </div>
    </header>
  );
}
