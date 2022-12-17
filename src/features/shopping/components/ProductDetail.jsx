import { React, useEffect, useState } from "react";
import axios from "axios";

import DeleteButton from "../../../components/admin/deleteButton";
import { useAuthContext } from "../../authentication/hooks/useAuthContext";

import imageTest from "../../../assets/image/nike1.jpg";
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
  // const config = {
  //   url: `api/upload/${product.image}`,
  // };
  // useEffect(() => {
  //   axios
  //     .get(config.url, config.header)
  //     .then((response) => {
  //       console.log(response.data);
  //       const reader = new FileReader();

  //       reader.onLoad = () => {
  //         setImage(reader.result);
  //         console.log(reader.result);
  //       };
  //       reader.readAsDataURL(imgUrl);
  //       setImage(response.data);
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  // }, []);
  return (
    <div className="product-details">
      <div key={product._id}>
        <Col xs={12} md={8} lg={4}>
          <Container className="articleCard">
            <img src={imgUrl} alt="" className="productImage" />

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
