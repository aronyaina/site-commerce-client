import { React, useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import DeleteButton from "../../../components/admin/deleteButton";
import { useAuthContext } from "../../authentication/hooks/useAuthContext";

import { Row, Col, Container } from "react-bootstrap";

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
  }, []);

  return (
    <div className="product-details">
      <div key={product._id}>
        <Col xs={12} md={8} lg={4}>
          <Container className="articleCard">
            <img
              src={`data:image/png;base64,${imgUrl}`}
              alt=""
              className="productImage"
            />

            <div className="productItem">
              <h1>{product.name}</h1>
              <h3>{product.price} Ar </h3>
              <br />
              <strong> Description: </strong> {product.description} <br />
              <strong>Restant: </strong> {product.quantity} <br />
              {year}
              <br />
              {hour + time}
            </div>
            <div className="delete-or-buy">
              <DeleteButton id={product._id} product={product} />
            </div>
          </Container>
        </Col>
      </div>{" "}
    </div>
  );
};
