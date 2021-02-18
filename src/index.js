import React, { useState } from "react";
import ReactDOM from "react-dom";
import Item from "./Item";
import Header from "./Header";
import Contact from "./Contact";
import Archive from "./Archive";
import Cart from "./Cart";
import ItemSpecific from "./ItemSpecific";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import "./mingleImage.css";
import { ProductContext } from "./ProductContext";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <ProductContext.Provider value={{ cart, setCart }}>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="container">
              <img src="/mingle.png" alt="herotic" className="image" />
            </div>
            <Item />
          </Route>
          <Route path="/archive">
            <Archive />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/store/:uniqueId" children={<ItemSpecific />}></Route>
        </Switch>
      </ProductContext.Provider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
