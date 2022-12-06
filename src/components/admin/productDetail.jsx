import React from "react";
import productFetcher from "../../lib/apiFetcher";
import { useState } from "react";
import { useProductContext } from "../../hooks/useProductContext";
import { useAuthContext } from "../hooks/useAuthContext";

export const ProductDetails = ({ product }) => {
  const year = product.createdAt.slice(0, 10);
  //==================== VARIABLE DECLARATION ====================//
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useProductContext();
  const { user } = useAuthContext();
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

  const handleClick = async (e) => {
    e.preventDefault();
    if (!user) {
      console.log("Vous devrez vous connecter");
      setError("Vous devrier vous connecter !");
      return;
    }
    const deleteProduct = async () => {
      const config = {
        url: `/product/${product._id}`,
        header: {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        },
      };
      return productFetcher.delete(config.url, config.header);
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
        <h4> {product.name} </h4>{" "}
        <p>
          <strong> Prix: </strong> {product.price}
          Ar{" "}
        </p>{" "}
        <p>
          <strong> Description: </strong> {product.description}{" "}
        </p>{" "}
        <p>
          <strong> stock: </strong> {product.quantity}{" "}
        </p>{" "}
        <p>
          <strong> Creer le: </strong> {year + " vers " + hour + time}{" "}
        </p>{" "}
        <span onClick={handleClick} className="material-symbols-outlined">
          Delete{" "}
        </span>{" "}
        <hr /> {error && <div className="error"> {error} </div>}{" "}
        {success && <div className="success"> "Supprime avec succes!" </div>}{" "}
      </div>{" "}
    </div>
  );
};
