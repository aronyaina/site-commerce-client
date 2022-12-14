import { React, useEffect, useState } from "react";
import DeleteButton from "../../../components/admin/deleteButton";
import { useAuthContext } from "../../authentication/hooks/useAuthContext";
import Card from "react-bootstrap/Card";
import axios from "axios";

export const ProductDetails = ({ product }) => {
  const year = product.createdAt.slice(0, 10);

  //==================== SET TIME ====================//
  const hourConverter = () => {
    if (parseInt(product.createdAt.slice(11, 12)) === 0) {
      return parseInt(product.createdAt.slice(12, 13)) + 3;
    } else {
      return parseInt(product.createdAt.slice(11, 13)) + 3;
    }
  };
  const { user } = useAuthContext();
  const hour = hourConverter();
  const time = product.createdAt.slice(13, 19);
  const [imgUrl, setImage] = useState("");
  //==================== RENDER DATA ====================//
  const config = {
    url: `api/upload/${product.image}`,
    header: {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
        responseType: "blob",
      },
    },
  };
  useEffect(() => {
    axios
      .get(config.url, config.header)
      .then((response) => {
        const reader = new FileReader();

        reader.onLoad = () => {
          setState(reader.result);
        };
        reader.readAsDataURL(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div className="product-details">
      <div key={product._id}>
        <Card style={{ width: "18rem" }} className="articleCard">
          <Card.Img variant="top" src={`data:base64,${imgUrl}`} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              <strong> Prix: </strong> {product.price} Ar
            </Card.Text>
            <Card.Text>
              <strong> Description: </strong> {product.description}{" "}
            </Card.Text>
            <Card.Text>
              <strong> stock: </strong> {product.quantity}{" "}
            </Card.Text>
            <Card.Text>
              <strong> Ajouter le: </strong> {year + " vers " + hour + time}{" "}
            </Card.Text>

            <DeleteButton id={product._id} product={product} />
          </Card.Body>
        </Card>
      </div>{" "}
    </div>
  );
};
