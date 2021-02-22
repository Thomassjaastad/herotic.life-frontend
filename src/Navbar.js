import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { ProductContext } from "./ProductContext";

const Navbar = () => {
  const { cart } = useContext(ProductContext);
  console.log("navbar", cart);
  const totCart = cart.reduce(function (acc, obj) {
    return acc + obj.quantity;
  }, 0);
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
            cart ({totCart}){" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
