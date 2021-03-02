import React from "react";
import ReturnPolicy from "./ReturnPolicy";
const ReturnPolicyButton = () => {
  const [readMoreReturnPolicy, setReadMoreReturnPolicy] = React.useState(false);
  if (readMoreReturnPolicy) {
    return (
      <>
        <button
          onClick={() => {
            setReadMoreReturnPolicy(!readMoreReturnPolicy);
          }}
        >
          Return Policy
        </button>
        <ReturnPolicy />
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => {
            setReadMoreReturnPolicy(!readMoreReturnPolicy);
          }}
        >
          Return Policy
        </button>
      </>
    );
  }
};

export default ReturnPolicyButton;
