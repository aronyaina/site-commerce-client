import { Button, Col, Row, Container, Card } from "react-bootstrap";
import { React, useState, useCallback, useEffect } from "react";
import { useProductContext } from "../hooks/useProductContext";
import { useAuthContext } from "../../authentication/hooks/useAuthContext";
import { ACTIONPRODUCT } from "../reducers/productReducer";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import MessageBox from "../../../components/layout/general/MessageBox";

export default function ProductForm() {
  //==================== STATE DECLARATION====================//

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productImage, setImageProduct] = useState("");
  const [isImageActive, setImageActive] = useState(false);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { dispatch } = useProductContext();
  const { user } = useAuthContext();
  const [emptyField, setEmptyField] = useState([]);

  const onDrop = useCallback(async (acceptedFiles) => {
    setImageProduct(acceptedFiles[0]);
  });
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("Vous devrez vous connecter");
      return;
    }
    //==================== VARIABLE DECLARATION====================//
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("productImage", productImage);

    //==================== POST DATA WITH AXIOS EXTERIOR====================//

    const config = {
      url: "/api/product",
      formData,
      header: {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      },
    };
    // POSTING DATA
    axios
      .post(config.url, config.formData, config.header)
      .then((response) => {
        const data = response.data;
        setImageProduct("");
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setSuccess(true);
        setError(null);
        setEmptyField([]);
        dispatch({
          type: ACTIONPRODUCT.CREATE_PRODUCT,
          payload: data,
        });
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.response.data.error);
        setEmptyField(error.response.data.emptyField);
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
  useEffect(() => {
    if (productImage !== "") {
      setImageActive(true);
    } else {
      setImageActive(false);
    }
  }, [isImageActive, productImage]);
  return (
    <form className="create" encType="multipart/form-data">
      <Card style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Text>
            {!isImageActive ? (
              <div
                {...getRootProps()}
                className={`dropzone ${isDragActive ? "active" : ""}`}
              >
                <input
                  {...getInputProps()}
                  type="file"
                  filename="productImage"
                  className={
                    emptyField.includes("productImage")
                      ? "form-control-file error"
                      : "form-control-file "
                  }
                  value={undefined}
                  name="image"
                  onChange={onHandleChange}
                  placeholder={
                    emptyField.includes("productImage")
                      ? "Veuiller saisir le nom du produit"
                      : "Image"
                  }
                />
                Inserer une image
              </div>
            ) : (
              <MessageBox variant={"success"}>
                Image inserte avec succes
              </MessageBox>
            )}
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
            <input
              type="text"
              name="description"
              value={description}
              className={emptyField.includes("title") ? "error" : ""}
              onChange={onHandleChange}
              placeholder="Description"
            />{" "}
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
          </Card.Text>
          <Button variant="outline-success" onClick={handleSubmit}>
            {" "}
            Ajouter
          </Button>{" "}
          {success && (
            <MessageBox variant="success">
              Inserted successfully <br />
            </MessageBox>
          )}
          {error && <MessageBox> {error}</MessageBox>}{" "}
        </Card.Body>
      </Card>
    </form>
  );
}
