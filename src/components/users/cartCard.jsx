import React from "react";
import { useState } from "react";
import { ButtonChange } from "./buttonChange";

export const CartCard = () => {
  const [count, setProductCount] = useState(0);
  const [price, setPrice] = useState(0);

  const onClick = (e) => {
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
    <div>
      <h1>Title</h1>
      <h2>Description</h2>
      <p>Total :{count}</p>
      <p>Prix Total :{price}</p>
      <ButtonChange onHandleClick={onClick} />
    </div>
  );
};
