import React from "react";
import { useState } from "react";
import { ButtonChange } from "./buttonChange";
import { UseProductDetail } from "../../hooks/products/useProductDetail";
export const ProductCard = () => {
  const [count, setProductCount] = useState(0);
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
    <div className="productCard">
      <UseProductDetail />
      <ButtonChange onHandleClick={onClick} />
    </div>
  );
};
