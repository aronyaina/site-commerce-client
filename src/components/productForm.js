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

  const [emptyField, setEmptyField] = useState([]);

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
        const data = response.data;
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setSuccess(true);
        setError(null);
        setEmptyField([]);
        dispatch({
          type: "CREATE_PRODUCT",
          payload: data,
        });
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.response.data.error);
        setEmptyField(error.response.data.emptyField);
        console.log(error.response.data.emptyField);
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
        className={emptyField.includes("name") ? "error" : ""}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder={
          emptyField.includes("name") ? "Veuiller saisir le nom du produit" : ""
        }
      />
      <br />
      <label>Description :</label>
      <input
        type="text"
        value={description}
        className={emptyField.includes("title") ? "error" : ""}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <label>Prix :</label>
      <input
        value={price}
        type="number"
        className={emptyField.includes("price") ? "error" : ""}
        placeholder={
          emptyField.includes("name")
            ? "Veuiller saisir le prix du produit"
            : ""
        }
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br />
      <label>Stock :</label>
      <input
        value={quantity}
        className={emptyField.includes("quantity") ? "error" : ""}
        placeholder={
          emptyField.includes("name")
            ? "Veuiller saisir la quantite du produit"
            : ""
        }
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
