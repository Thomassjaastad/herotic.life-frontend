import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <Link to="./">
        <img src="/mingle.png" alt="herotic" className="imagetop" />
      </Link>
      <Navbar />
    </header>
  );
}
