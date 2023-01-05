// React
import React from "react";

// Components
function BestOfCard({ img, title, texte }) {
  return (
    <div className="BestOfCard">
      <img src={img} alt="best of" />
      <h3>{title}</h3>
      <p>{texte}</p>
    </div>
  );
}

export default BestOfCard;
