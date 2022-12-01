import { React, useState } from "react";
import productFetcher from "../fetchers/productFetcher";
import { useProductContext } from "../hooks/useProductContext";

function ProductForm() {
  //==================== STATE DECLARATION====================//
  const { dispatch } = useProductContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //==================== VARIABLE DECLARATION====================//
    const product = {
      name,
      description,
      price,
      quantity,
    };
    const stringify = JSON.stringify(product);
    const config = {
      url: "",
      stringify,
      headers: {
        headers: {
          "Content-Type": "application/json",
          "content-type": "application/json;charset=utf-8",
        },
      },
    };
    //==================== POST DATA WITH AXIOS EXTERIOR====================//
    const postProduct = async () => {
      return productFetcher.post(config.url, config.stringify, config.headers);
    };

    postProduct()
      .then((response) => {
        console.log("Product inserted successfully !!");
        const data = response.data;
        console.log(JSON.stringify(data));
        dispatch({
          type: "CREATE_PRODUCT",
          payload: data,
        });
      })
      .catch((error) => {
        setError(error);
        console.log(error.message);
      })
      .finally(() => {
        setSuccess(true);
      });
  };

  //==================== RENDERING====================//
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
      {success && (
        <div className="success">
          Inserted successfully
          <br />
        </div>
      )}
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
