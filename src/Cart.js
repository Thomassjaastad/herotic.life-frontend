import React from "react";
import { ProductContext } from "./ProductContext";
import CheckoutEmptyTable from "./CheckoutEmptyTable";
import CartRowHeader from "./CartRowHeader";
import CartRow from "./CartRow";
import "./Cart.css";

const Cart = () => {
  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { cart } = React.useContext(ProductContext);
  React.useEffect(() => {
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

  if (cart.length === 0) {
    return <CheckoutEmptyTable />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  let subTotal = 0;
  return (
    <>
      <div className="placeholder3">
        <h1 style={{ fontSize: "21px" }}>Shopping Cart</h1>
        <table>
          <tbody>
            <CartRowHeader />
            {cart.map(({ id, quantity }, index) => {
              const found = items.find(({ id: idx }) => idx === id);
              if (!found) return null;

              const { title, price, currency, image } = found;

              subTotal += quantity * price;
              return (
                <CartRow
                  key={id}
                  title={title}
                  price={price}
                  currency={currency}
                  image={image}
                  index={index}
                  quantity={quantity}
                  id={id}
                />
              );
            })}
            <tr>
              <td>Subtotal {subTotal},00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
