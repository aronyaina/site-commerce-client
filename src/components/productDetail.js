import React from "react";

export const ProductDetails = ({ product }) => {
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
          <strong>Creer le : </strong> {product.createdAt}
        </p>
        <hr />
      </div>
    </div>
  );
};
