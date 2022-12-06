import React from "react";
import { useState } from "react";

export const ProductCard = () => {
  const [count, setProductCount] = useState(0);
  const onHandleClick = (e) => {
    const name = e.target.name;
    switch (name) {
      case "add":
        setProductCount((prevValue) => {
          return (prevValue = prevValue + 1);
        });
        break;
      case "substract":
        setProductCount((prevValue) => {
          return (prevValue = prevValue - 1);
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="productCard">
      <h1>Title </h1>
      <p>Description</p>
      <p>Price</p>
      <p>Nombre restant : {count}</p>
      <button onClick={onHandleClick} name="substract">
        -
      </button>
      <button onClick={onHandleClick} name="add">
        +
      </button>
    </div>
  );
};
