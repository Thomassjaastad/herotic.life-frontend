import React from "react";
import "./F5.css";
import "./Bjorg.css";

const url = [
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-3.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-3-1.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-12.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-4.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-5.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-6.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-8.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-11.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-10.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-2.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-9.jpg",
  "https://www.herotic.life/uploads/1/2/1/8/121808125/herotic-7.jpg",
];

const F5 = () => {
  return (
    <div>
      <h2 className="heroticFall">Herotic Fall '18</h2>
      <div className="f5image">
        {url.map((img) => (
          <img src={img} key={img} alt="" />
        ))}
      </div>
      <p>
        <a href="http://www.f5conceptstore.com/" className="heroticFall">
          http://www.f5conceptstore.com/
        </a>
      </p>
    </div>
  );
};

export default F5;
