import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/"> STORE </Link> <Link to="/archive"> ARCHIVE </Link>{" "}
      <Link to="/contact"> CONTACT </Link> <Link to="/cart"> CART</Link>
    </nav>
  );
};

export default Navbar;
