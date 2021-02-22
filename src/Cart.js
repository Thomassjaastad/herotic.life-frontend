import React, { useContext, useState, useEffect, useRef } from "react";
import { ProductContext } from "./ProductContext";
import CheckoutEmptyTable from "./CheckoutEmptyTable";

import "./Cart.css";

const header = ["Items", "Price", "Qty", "Total"];

const Cart = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const inputRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const { cart, setCart } = useContext(ProductContext);
  useEffect(() => {
    if (cart.length === 0) {
      return;
    }

    const idx = cart.map((item) => item.id);
    fetch(`/cart?id=${idx.join(",")}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [cart]);

  function removeItem(index) {
    setCart((prevState) => {
      return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
    });
  }

  const calcTotal = (qty, price) => {
    return qty * price;
  };

  if (cart.length === 0) {
    return <CheckoutEmptyTable />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  const sumQty = cart.reduce(function (acc, obj) {
    return acc + obj.quantity;
  }, 0);
  console.log("cart info", cart);
  return (
    <>
      <div className="placeholder3">
        <h1 style={{ fontSize: "21px" }}>Shopping Cart</h1>
        <table>
          <tbody>
            <tr>
              {header.map((colName, index) => (
                <th key={index}> {colName.toUpperCase()}</th>
              ))}
            </tr>
            {/* {items.map(({ id, title, price, currency, image }, index) => { */}
            {cart.map(({ id, quantity }, index) => {
              const found = items.find(({ id: idx }) => idx === id);
              if (!found) return null;

              const { title, price, currency, image } = found;

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
                        console.log(inputRef.current);

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
                    {currency} {calcTotal(quantity, price)},00
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h1>You have added {sumQty} items to the cart</h1>
    </>
  );
};

export default Cart;
