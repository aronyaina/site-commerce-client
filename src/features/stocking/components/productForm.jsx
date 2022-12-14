import { Button, Col, Row, Container, Card } from "react-bootstrap";
import { React, useState, useCallback, useEffect } from "react";
import { useProductContext } from "../hooks/useProductContext";
import { useAuthContext } from "../../authentication/hooks/useAuthContext";
import { ACTIONPRODUCT } from "../reducers/productReducer";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import MessageBox from "../../../components/layout/general/MessageBox";
import TemporaryMessage from "../../../components/layout/general/TemporaryMessage";

export default function ProductForm() {
  //==================== STATE DECLARATION====================//

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productImage, setImageProduct] = useState("");

  const [id, setId] = useState("");
  const [isImageActive, setImageActive] = useState(false);

  const [error, setError] = useState(null);
  
  const [success, setSuccess] = useState(false);
  const [isUpdated, setUpdated] = useState(false);
  const { oneProduct, dispatch } = useProductContext();

  const { user } = useAuthContext();
  

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
       
        dispatch({
          type: ACTIONPRODUCT.CREATE_PRODUCT,
          payload: data,
        });
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.response.data.error);
        
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

  const modClickHandle = (e) => {
    e.preventDefault();
    const updateData = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    };
    const config1 = {
      url: `/api/product/${id}`,
      updateData,
      header: {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    };
    axios
      .patch(config1.url, config1.updateData, config1.header)
      .then((response) => {
        setImageProduct("");
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setUpdated(true);
        setError(null);
     
        dispatch({
          type: ACTIONPRODUCT.DEL_ONE_PRODUCT,
        });
      })
      .catch((error) => {
        setError(error.response.data.error);
        
      });
  };

  useEffect(() => {
    if (oneProduct == "" || oneProduct == undefined) {
    } else {
      setName(oneProduct.name);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setQuantity(oneProduct.quantity);
      setId(oneProduct._id);
    }

    if (productImage !== "") {
      setImageActive(true);
    } else {
      setImageActive(false);
    }
  }, [isImageActive, productImage, oneProduct]);
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
                  className="form-control-file"
                  value={undefined}
                  name="image"
                  onChange={onHandleChange}
                
                />
                Inserer une image
              </div>
            ) : (
              <TemporaryMessage variant={"success"} title="Insertion reussie .">
                Image inserte avec succes
              </TemporaryMessage>
            )}
            <input
              type="text"
              value={name}
              name="name"
           
              onChange={onHandleChange}
              placeholder={
                "Nom"
              }
            />{" "}
            <input
              type="text"
              name="description"
              value={description}
         
              onChange={onHandleChange}
              placeholder="Description"
            />{" "}
            <input
              value={price}
              type="number"
              name="price"
          
              placeholder={
                "Prix"
              }
              onChange={onHandleChange}
            />{" "}
            <input
              value={quantity}
              name="quantity"
        
              placeholder={
                "Stock"
              }
              type="number"
              onChange={onHandleChange}
            />{" "}
          </Card.Text>
          <Button variant="outline-success" onClick={handleSubmit}>
            {" "}
            Ajouter
          </Button>{" "}
          <Button variant="outline-success" onClick={modClickHandle}>
            {" "}
            Modifier
          </Button>{" "}
          {success && (
            <TemporaryMessage variant="success">
              Inserer avec succes !<br />
            </TemporaryMessage>
          )}
          {isUpdated && (
            <TemporaryMessage variant="success">
              Mise a jour reussi !<br />
            </TemporaryMessage>
          )}
          {error && <TemporaryMessage> {error}</TemporaryMessage>}{" "}
        </Card.Body>
      </Card>
    </form>
  );
}
