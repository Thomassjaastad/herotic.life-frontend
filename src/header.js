import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
// import logo from '../public/mingle.png';

import './header.css'
export default function Header() {
  
  return (
    <header>
      <img src = '/mingle.png' alt='herotic' class="center"/>
      <AppBar>Herotic</AppBar>
    </header>
  );
}
