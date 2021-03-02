import React from "react";

const CheckoutHelpfullInformation = ({
  readMoreReturnPolicy,
  setReadMoreReturnPolicy,
}) => {
  return (
    <>
      <div className="placeholder1">Helpful Information</div>
      <ul>
        <li>
          <button
            onClick={() => {
              setReadMoreReturnPolicy(!readMoreReturnPolicy);
            }}
          >
            Return Policy
          </button>
        </li>
      </ul>
    </>
  );
};

export default CheckoutHelpfullInformation;
