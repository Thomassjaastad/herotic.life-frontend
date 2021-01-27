import { Component } from "react";

class Item extends Component{
  constructor(){
    super();
    this.state = {
      items:[]
    }
  }

  componentDidMount(){
    fetch('/items')
      .then(res => res.json())
      .then(items => this.setState({items}, () => (items)));
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        {items.map(({ id, title, image, currency,price }) => (
          <div key={id}>
            <img src={image} alt="" />
            <h4>{title}</h4>
              <h4>{currency} {price}</h4>
          </div>
        ))}
      </div>
    );
  }
}


// export const Item = (props) => {
  // const { image, title, price, currency } = props.item;
  // return (
    // <article className="item">
      // { <img src={image} alt="" /> }
      // { <h1> }
        // { {title} }
      // { </h1> }
      // { <h4> }
        // { {currency} {price} }
      // { </h4> }
    //  { </article> }
  // );
// };

export default Item;