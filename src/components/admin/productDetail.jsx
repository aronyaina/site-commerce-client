import { React, useEffect } from "react";
import DeleteButton from "./deleteButton";
import Card from "react-bootstrap/Card";
import testImage from "../../assets/image/chaussure_nike.jpg";
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

  const hour = hourConverter();
  const time = product.createdAt.slice(13, 19);

  //==================== RENDER DATA ====================//
  return (
    <div className="product-details">
      <div key={product._id}>
        <Card style={{ width: "18rem" }} className="articleCard">
          <Card.Img variant="top" src={testImage} />
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
