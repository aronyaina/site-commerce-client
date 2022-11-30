import React from "react";

export const ProductDetails = ({ product }) => {
  const year = product.createdAt.slice(0, 10);

  const hourConverter = () => {
    if (parseInt(product.createdAt.slice(11, 12)) === 0) {
      return parseInt(product.createdAt.slice(12, 13)) + 3;
    } else {
      return parseInt(product.createdAt.slice(11, 13)) + 3;
    }
  };
  const hour = hourConverter();

  const time = product.createdAt.slice(13, 19);
  return (
    <div className="product-details">
      <div key={product._id}>
        <h4>{product.name}</h4>
        <p>
          <strong>Prix :</strong>
          {product.price} Ar
        </p>
        <p>
          <strong> Description :</strong> {product.description}
        </p>
        <p>
          <strong> stock :</strong> {product.quantity}
        </p>
        <p>
          <strong>Creer le : </strong> {year + " vers " + hour + time}
        </p>
        <hr />
      </div>
    </div>
  );
};
