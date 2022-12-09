import { Button } from "react-bootstrap";

import { React, useState } from "react";
import productFetcher from "../../../lib/apiFetcher";
import { useProductContext } from "../hooks/useProductContext";
import { useAuthContext } from "../../authentication/hooks/useAuthContext";
import { ACTIONPRODUCT } from "../reducers/productReducer";
export default function ProductForm() {
  //==================== STATE DECLARATION====================//

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { dispatch } = useProductContext();
  const { user } = useAuthContext();
  const [emptyField, setEmptyField] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      console.log("Vous devrez vous connecter");
      setError("Vous devrez vous connecter");
      return;
    }
    //==================== VARIABLE DECLARATION====================//
    const product = {
      name,
      description,
      price,
      quantity,
    };
    const stringify = JSON.stringify(product);

    //==================== POST DATA WITH AXIOS EXTERIOR====================//
    const postProduct = async () => {
      const config = {
        url: "/product",
        stringify,
        header: {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        },
      };

      return productFetcher.post(config.url, config.stringify, config.header);
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
        console.log(response.data);
        dispatch({
          type: ACTIONPRODUCT.CREATE_PRODUCT,
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
  const onHandleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "quantity":
        setQuantity(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <form className="create">
      <h3> Ajouter un nouveau produit </h3>
      <input
        type="text"
        value={name}
        name="name"
        className={emptyField.includes("name") ? "error" : ""}
        onChange={onHandleChange}
        placeholder={
          emptyField.includes("name")
            ? "Veuiller saisir le nom du produit"
            : "Nom"
        }
      />{" "}
      <br />
      <input
        type="text"
        name="description"
        value={description}
        className={emptyField.includes("title") ? "error" : ""}
        onChange={onHandleChange}
        placeholder="Description"
      />{" "}
      <br />
      <input
        value={price}
        type="number"
        name="price"
        className={emptyField.includes("price") ? "error" : ""}
        placeholder={
          emptyField.includes("name")
            ? "Veuiller saisir le prix du produit"
            : "Prix"
        }
        onChange={onHandleChange}
      />{" "}
      <br />
      <input
        value={quantity}
        name="quantity"
        className={emptyField.includes("quantity") ? "error" : ""}
        placeholder={
          emptyField.includes("name")
            ? "Veuiller saisir la quantite du produit"
            : "Stock"
        }
        type="number"
        onChange={onHandleChange}
      />{" "}
      <br />
      <Button variant="outline-success" onClick={handleSubmit}>
        {" "}
        Ajouter
      </Button>{" "}
      {success && (
        <div className="success">
          Inserted successfully <br />
        </div>
      )}{" "}
      {error && (
        <div className="error">
          {" "}
          {error} <br />
        </div>
      )}{" "}
    </form>
  );
}