import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <header>
      <img src="/mingle.png" alt="herotic" class="imagetop" />
      <div className="headercenter"><Navbar/></div>
    </header>
  );
}
