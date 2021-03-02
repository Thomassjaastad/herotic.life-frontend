import React from "react";
import EmptyShoppingCartHeader from "./EmptyShoppingCartHeader";
import ShippingInfoButton from "./ShippingInfoButton";
import ReturnPolicyButton from "./ReturnPolicyButton";
const CheckoutEmptyTable = () => {
  return (
    <>
      <EmptyShoppingCartHeader />
      <div className="placeholder1">Helpful Information</div>
      <ul>
        <li>
          <ReturnPolicyButton />
        </li>
        <br />
        <li>
          <ShippingInfoButton />
        </li>
      </ul>
    </>
  );
};

export default CheckoutEmptyTable;
