import React from "react";
import productFetcher from "../fetchers/productFetcher";
import { useState } from "react";
import { useProductContext } from "../hooks/useProductContext";

export const ProductDetails = ({ product }) => {
  const year = product.createdAt.slice(0, 10);
  //==================== VARIABLE DECLARATION ====================//
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useProductContext();
  //==================== SET TIME ====================//
  const hourConverter = () => {
    if (parseInt(product.createdAt.slice(11, 12)) === 0) {
      return parseInt(product.createdAt.slice(12, 13)) + 3;
    } else {
      return parseInt(product.createdAt.slice(11, 13)) + 3;
    }
  };

  const hour = hourConverter();
  const time = product.createdAt.slice(13, 19);
  //==================== DELETE DATA WITH AXIOS EXTERIOR====================//
  const config = {
    url: product._id,
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const deleteProduct = async () => {
      return productFetcher.delete(config.url);
    };
    deleteProduct()
      .then((response) => {
        console.log("Product deleted successfully !!");
        const data = response.data;
        console.log(JSON.stringify(data));
        dispatch({
          type: "DELETE_PRODUCT",
          payload: data,
        });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setSuccess(true);
      });
  };

  //==================== RENDER DATA ====================//
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
        <span onClick={handleClick} className="deleteButton">
          Delete
        </span>
        <hr />
        {error && (
          <div className="error">"Can't be deleted because :" {error}</div>
        )}
        {success && <div className="success">"Deleted successfully !"</div>}
      </div>
    </div>
  );
};
