import React from "react";
import { Link } from "react-router-dom";

const EmptyShoppingCartHeader = () => (
  <div className="placeholder1">
    Shopping Cart
    <div className="placeholder">
      There are no items in your shopping cart.
      <br />
      <Link
        to="/"
        style={{
          color: "#B9B9B9",
          textDecoration: "none",
        }}
      >
        Continue Shopping
      </Link>
    </div>
  </div>
);

export default EmptyShoppingCartHeader;
