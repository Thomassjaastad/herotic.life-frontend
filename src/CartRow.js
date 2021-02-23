import React, { useContext, useRef } from "react";
import { ProductContext } from "./ProductContext";

const CartRow = ({ title, price, currency, image, index, quantity, id }) => {
  const inputRef = useRef();
  const { setCart } = useContext(ProductContext);
  const calcItemPrice = (qty, price) => {
    return qty * price;
  };
  const removeItem = (index) => {
    setCart((prevState) => {
      return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
    });
  };

  return (
    <tr key={index}>
      <td>
        <img
          src={image}
          alt=""
          style={{
            width: "82px",
            height: "82px",
          }}
        />
      </td>
      <td>
        {title} <br /> Shipping, or in-store pickup
      </td>
      <td>
        {currency} {price},00
      </td>
      <td>
        <input
          ref={inputRef}
          type="text"
          defaultValue={quantity}
          onBlur={(event) => {
            let val;
            if (parseInt(event.target.value, 10) > 0) {
              val = parseInt(event.target.value, 10);
            } else {
              val = 1;
            }
            inputRef.current.value = val;

            setCart((prevState) => {
              return [
                ...prevState.slice(0, index),
                { id, quantity: val },
                ...prevState.slice(index + 1),
              ];
            });
          }}
          min={1}
        />

        <button type="button" onClick={() => removeItem(index)}>
          Delete item
        </button>
      </td>
      <td>
        {currency} {calcItemPrice(quantity, price)},00
      </td>
    </tr>
  );
};

export default CartRow;
