import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";
import Header from "./Header";
import Contact from "./Contact";
import Archive from "./Archive";
import Cart from "./Cart";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <img src="/mingle.png" alt="herotic" className="imagecenter" />
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
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
