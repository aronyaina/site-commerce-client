import { React, useState } from "react";
import axios from "axios";
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
    axios
      .post(url, stringify, {
        headers: {
          "Content-Type": "application/json",
          "content-type": "application/json;charset=utf-8",
        },
      })
      .then(({ stringify }) => {
        console.log(stringify);
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
    // const response = await fetch("/api/products", {
    //   method: "post",
    //   accept: "application/json",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=UTF-8",
    //   },
    //   body: JSON.stringify({
    //     name: "Souris",
    //     description: "Bonne souris",
    //     price: "3200",
    //     quantity: "3",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((product) => {
    //     setError(null);
    //     setName("");
    //     setDescription("");
    //     setPrice("");
    //     setQuantity("");
    //     console.log("Success:", product);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    // // const json = await response.json();

    // // if (!response.ok) {
    // //   setError(json.error);
    // //   console.log(error);
    // // }

    // // if (response.ok) {
    // //   setError(null);
    // //   setName("");
    // //   setDescription("");
    // //   setPrice("");
    // //   setQuantity("");
    // //   console.log("Product added !", json);
    // // }
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
