import React from "react";
import ReadMoreReturnPolicy from "./ReadMoreReturnPolicy";
import EmptyShoppingCartHeader from "./EmptyShoppingCartHeader";
import CheckoutHelpfullInformation from "./CheckoutHelpfulInformation";

const CheckoutEmptyTable = () => {
  const [readMoreReturnPolicy, setReadMoreReturnPolicy] = React.useState(false);
  if (readMoreReturnPolicy) {
    return (
      <div>
        <EmptyShoppingCartHeader />
        <CheckoutHelpfullInformation
          readMoreReturnPolicy={readMoreReturnPolicy}
          setReadMoreReturnPolicy={setReadMoreReturnPolicy}
        />
        <ReadMoreReturnPolicy />
      </div>
    );
  } else {
    return (
      <div>
        <EmptyShoppingCartHeader />
        <CheckoutHelpfullInformation
          readMoreReturnPolicy={readMoreReturnPolicy}
          setReadMoreReturnPolicy={setReadMoreReturnPolicy}
        />
      </div>
    );
  }
};

export default CheckoutEmptyTable;
