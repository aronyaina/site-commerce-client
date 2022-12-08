import { Row, Col } from "react-bootstrap";
import React from "react";
import { useCartContext } from "../../hooks/products/useCartContext";

function cartCard() {
  const { state, dispatch: ctxDispatch } = useCartContext();

  const {
    cart: { cartItems },
  } = state;

  return (
    <div>
      <h1>Shopping cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <div>
              Le panier est vide. <Link to="/buying">Acheter des articles</Link>
            </div>
          ) : (
            <div key={cartItems.id}>
              {cartItems.map((item) => (
                <div key={item._id}>
                  <Row className="align-items-center"></Row>
                </div>
              ))}
            </div>
          )}
        </Col>
        <Col md={4}>
          <Link to={`/product/${product.name}`}> </Link>
        </Col>
      </Row>
    </div>
  );
}

export default cartCard;
