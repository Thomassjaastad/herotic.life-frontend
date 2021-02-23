import React from "react";

const header = ["Items", "Price", "Qty", "Total"];

const CartRowHeader = () => (
  <tr>
    {header.map((colName, index) => (
      <th key={index}> {colName.toUpperCase()}</th>
    ))}
  </tr>
);

export default CartRowHeader;
