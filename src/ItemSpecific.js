import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ItemSpecific.css";
import "./AddToCart.css";
import { ProductContext } from "./ProductContext";

function ItemSpecific() {
  const { cart, setCart } = useContext(ProductContext);
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { uniqueId } = useParams();
  useEffect(() => {
    fetch(`/items/${uniqueId}`)
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
  }, [uniqueId]);
  const { id, image, title, price, currency } = items;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <img src={image} alt="" style={{ float: `left` }} className="product" />
      <div>
        <h2>{title}</h2>
        <span>
          {currency} {price}
        </span>
        <p>Productspecs</p>
        <label>Quantity</label>
        <div>
          <input
            style={{ padding: `1em`, marginBottom: `0.5em` }}
            type="number"
            id="Value"
            placeholder=""
            min="0"
            onChange={(event) => setQuantity(parseInt(event.target.value))}
          />
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              setCart((prevState) => {
                const idx = prevState.findIndex((item) => item.id === id);
                if (idx !== -1) {
                  return [
                    ...prevState.slice(0, idx),
                    { id, quantity: prevState[idx].quantity + quantity },
                    ...prevState.slice(idx + 1),
                  ];
                } else {
                  return [...prevState, { id, quantity }];
                }
              });
            }}
          >
            add to cart
          </button>
        </div>
        <span>Available for shipping or in-store pickup</span>
      </div>
    </div>
  );
}

export default ItemSpecific;
