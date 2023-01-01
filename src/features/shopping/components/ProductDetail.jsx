import { React, useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import DeleteButton from "../../../components/admin/deleteButton";

import { Card } from "react-bootstrap";

export const ProductDetails = ({ product }) => {
  //==================== SET TIME ====================//
  const year = product.createdAt.slice(0, 10);
  const hourConverter = () => {
    if (parseInt(product.createdAt.slice(11, 12)) === 0) {
      return parseInt(product.createdAt.slice(12, 13)) + 3;
    } else {
      return parseInt(product.createdAt.slice(11, 13)) + 3;
    }
  };

  const hour = hourConverter();
  const time = product.createdAt.slice(13, 19);
  const [imgUrl, setImage] = useState("");

  //==================== RENDER DATA ====================//
  const config = {
    url: `api/upload/${product.image}`,
    header: {
      responseType: "arraybuffer",
      headers: { "Content-Type": "image/*" },
    },
  };
  useEffect(() => {
    axios
      .get(config.url, config.header)
      .then((response) => {
        setImage(Buffer.from(response.data, "binary").toString("base64"));
      })
      .catch((err) => {
        throw err;
      });
  }, [product]);

  return (
    <Card key={product._id} style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src={`data:image/png;base64,${imgUrl}`}
        style={{ height: "18rem" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Title>{product.price} Ar</Card.Title>
        <Card.Text>
          <strong> Description: </strong> {product.description} <br />
          <strong>Restant: </strong> {product.quantity} <br />
          {year}
          <br />
          {hour + time}
        </Card.Text>

        <DeleteButton id={product._id} product={product} />
      </Card.Body>
    </Card>
  );
};
