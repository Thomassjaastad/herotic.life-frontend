import React from "react";

import { Link } from "react-router-dom";

const CheckoutEmptyTable = () => {
  return (
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
      <hr style={{ width: `100%`, marginBottom: `2em` }} />
      Helpful Information
      <div
        style={{
          color: "#B9B9B9",
          fontSize: "15px",
          padding: "4em 0em 2em",
        }}
      >
        Return Policy <br />
      </div>
      <div
        style={{
          color: "#B9B9B9",
          fontSize: "15px",
          padding: "0em 0em 2em",
        }}
      >
        Shipping Info
      </div>
    </div>
  );
};

export default CheckoutEmptyTable;
