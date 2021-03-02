import React from "react";
import ShippingInfo from "./ShippingInfo";

const ShippingInfoButton = () => {
  const [readMoreShippingInfo, setReadMoreShippingInfo] = React.useState(false);
  if (readMoreShippingInfo) {
    return (
      <>
        <button
          onClick={() => {
            setReadMoreShippingInfo(!readMoreShippingInfo);
          }}
        >
          Shipping Info
        </button>
        <ShippingInfo />
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => {
            setReadMoreShippingInfo(!readMoreShippingInfo);
          }}
        >
          Shipping Info
        </button>
      </>
    );
  }
};

export default ShippingInfoButton;
