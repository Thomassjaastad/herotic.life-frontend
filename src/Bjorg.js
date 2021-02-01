import React from "react";

import "./Bjorg.css";

const url = [
  "https://www.herotic.life/uploads/1/2/1/8/121808125/large-dolpin-chain.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-chain-large-adef200a-88fb-4d23-ac44-baebd295795c.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/large-dolphin-ring.jpg",
];

const Bjorg = () => {
  return (
    <div>
      <img
        src="https://www.herotic.life/uploads/1/2/1/8/121808125/editor/41965140-10155886833251376-8306243901790879744-o.jpg?1554790877"
        alt=""
        className="bjorgcenter"
      />
      <a
        href="https://bjorgjewellery.com/collections/bjorg-x-herotic"
        className="urlcenter"
      >
        https://bjorgjewellery.com/collections/bjorg-x-herotic
      </a>
      <p className="bjorgimage">
        {url.map((img) => (
          <img src={img} key={img} alt="" className="bjorgimage" />
        ))}
      </p>
    </div>
  );
};

export default Bjorg;
