import { React, useState } from "react";
import axios from "axios";
import addProduct from "../fetchers/addProduct";
import productFetcher from "../fetchers/productFetcher";
// import addProduct from "../fetchers/addProduct";
function ProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      description,
      price,
      quantity,
    };
    const stringify = JSON.stringify(product);
    console.log(typeof stringify);
    console.log(stringify);
    const url = "/api/products";

    //==================== POST DATA WITH AXIOS EXTERIOR====================//
    addProduct(stringify)
      .then((response) => {
        console.log(response);
        setError(null);
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
      });
    //==================== POST DATA WITH AXIOS INTERIOR====================//
    // axios
    //   .post(url, stringify, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "content-type": "application/json;charset=utf-8",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     setError(null);
    //     setName("");
    //     setDescription("");
    //     setPrice("");
    //     setQuantity("");
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     setError(error);
    //   });
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Ajouter un nouveau produit</h3>
      <label>Nom :</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label>Description :</label>
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <label>Prix :</label>
      <input
        value={price}
        type="number"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br />
      <label>Stock :</label>
      <input
        value={quantity}
        type="number"
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />
      <br />
      <button>Ajouter le produit</button>

      {error && (
        <div className="error">
          {error}
          <br />
        </div>
      )}
    </form>
  );
}

export default ProductForm;
