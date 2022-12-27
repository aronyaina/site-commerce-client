import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useAuthContext } from "../../../features/authentication/hooks/useAuthContext";

function FormProduct({ id, product, visible }) {
  const { user } = useAuthContext();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [isVisible, setVisibility] = useState(visible);

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

  const onHandleClick = (e) => {
    e.preventDefault();

    const config = {
      url: `/api/product/${id}`,
      header: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          name: name,
          description: description,
          price: price,
          quantity: quantity,
        },
      },
    };
    axios
      .patch(config.url, config.header)
      .then((response) => {
        const data = response.data;
        dispatch({
          type: ACTIONPRODUCT.DELETE_PRODUCT,
          payload: data,
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  const onHandleToggle = (e) => {
    e.preventDefault();
    setVisibility((prevValue) => {
      !prevValue;
    });
  };

  useEffect(() => {
    var x = document.getElementById("myDIV");
    if (isVisible) {
      x.style.visibility = "visible";
    } else {
      x.style.visibility = "hidden";
    }
  }, [visible, product]);

  return (
    <div className="FormProduct" id="FormProduct">
      <input type="text" value={name} name="name" onChange={onHandleChange} />{" "}
      <input
        type="text"
        name="description"
        value={description}
        onChange={onHandleChange}
      />{" "}
      <input
        value={price}
        type="number"
        name="price"
        onChange={onHandleChange}
      />{" "}
      <input
        value={quantity}
        name="quantity"
        type="number"
        onChange={onHandleChange}
      />{" "}
      <Button onClick={onHandleClick}>Accepter</Button>
      <Button onClick={onHandleToggle} variant="danger">
        Annuler
      </Button>
    </div>
  );
}

export default FormProduct;
