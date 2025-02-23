import { Component } from "react";
import { Link } from "react-router-dom";
import "./Item.css";

class Item extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("/items")
      .then((res) => res.json())
      .then((items) => this.setState({ items }, () => items));
  }

  render() {
    const { items } = this.state;
    return (
      <div className="item">
        {items.map(({ id, title, image, currency, price }) => (
          <div key={id}>
            <Link to={`/store/${id}`}>
              <img src={image} alt="" />
              <h1>{title}</h1>
              <h4>
                {currency} {price}
              </h4>
              <button className="Button"> Shop </button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Item;
