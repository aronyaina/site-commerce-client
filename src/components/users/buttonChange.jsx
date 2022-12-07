import React from "react";

export const ButtonChange = ({ onHandleClick }) => {
  return (
    <div>
      <button onClick={onHandleClick} name="substract">
        -
      </button>
      <button onClick={onHandleClick} name="add">
        +
      </button>
    </div>
  );
};
