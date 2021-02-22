import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import CheckoutEmptyTable from "./CheckoutEmptyTable";

import "./Cart.css";

const header = ["Items", "Price", "Qty", "Total"];

const Cart = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
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

  const totCart = cart.reduce(function (acc, obj) {
    return acc + obj.quantity;
  }, 0);

  function removeItem(id) {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart(updateCart);
    const updateItems = items.filter((item) => item.id !== id);
    setItems(updateItems);
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
            {items.map(({ id, title, price, currency, image }, index) => (
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
                    type="text"
                    value={cart[index].quantity} //change qty here
                    onChange={() => {}}
                  />
                  <button type="button" onClick={() => removeItem(id)}>
                    Delete item
                  </button>
                </td>
                <td>
                  {currency} {calcTotal(cart[index].quantity, price)},00
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1>You have added {totCart} items to the cart</h1>
    </>
  );
};

export default Cart;
