import { Link } from "react-router-dom";
import { useState } from "react";

// BOOTSTRAP
import { Row, Col, ListGroup, Button, Card } from "react-bootstrap";
import { UilPlusCircle } from "@iconscout/react-unicons";
import { UilMinusCircle } from "@iconscout/react-unicons";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { UilPrintSlash } from "@iconscout/react-unicons";
// CONTEXT
import { useCartContext } from "../hooks/useCartContext";
import MessageBox from "../../../components/layout/general/MessageBox";
import HeaderComponent from "../../../components/layout/general/HeaderTitle";
// LIB
import axios from "axios";
// REDUCER
import { ACTIONCART } from "../reducers/cartReducer";

function CartTable() {
  const { state, dispatch } = useCartContext();
  const [inStock, setInStock] = useState(true);
  const {
    cart: { cartItems },
  } = state;

  const onHandleClick = async (item, quantity) => {
    const { data } = await axios.get(`/api/product/${item._id}`);
    if (data.quantity < quantity) {
      setInStock(false);
      return;
    }

    dispatch({
      type: ACTIONCART.ADD_TO_CART,
      payload: { ...item, quantity: quantity },
    });
  };

  const onClickRemove = (item) => {
    dispatch({ type: ACTIONCART.DEL_TO_CART, payload: item });
  };

  return (
    <div>
      <HeaderComponent title={"PANIER"} />
      <Row>
        <Col md={9}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Le panier est vide. <Link to="/buying">Acheter des articles</Link>
            </MessageBox>
          ) : (
            <ListGroup className="listGroupCart">
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id} className="listItem">
                  <Row className="align-items-center">
                    <Col md={4}>
                      {/* <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded img-thumbnail"
                    ></img> */}
                      {item.name}
                    </Col>
                    <Col md={3}>
                      <Button
                        className="border-0"
                        variant="outline-danger"
                        disabled={item.quantity === 1}
                        onClick={() => onHandleClick(item, item.quantity - 1)}
                      >
                        <UilMinusCircle />
                      </Button>
                      <span>{item.quantity}</span>{" "}
                      <Button
                        className="border-0"
                        variant="outline-success"
                        disabled={item.quantity === item.stock}
                        onClick={() => onHandleClick(item, item.quantity + 1)}
                      >
                        <UilPlusCircle />
                      </Button>
                    </Col>
                    <Col md={3}>{item.price} ariary</Col>
                    <Col md={1}>
                      <Button
                        className="border-0"
                        variant="outline-danger"
                        onClick={() => {
                          onClickRemove(item);
                        }}
                      >
                        <UilTrashAlt />
                      </Button>
                    </Col>
                    <Col md={1}>
                      {inStock ? (
                        <></>
                      ) : (
                        <Button variant="warning">
                          <UilPrintSlash />
                        </Button>
                      )}
                    </Col>
                  </Row>
                  <Row className="align-items-center"></Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup className="text-center">
                <ListGroup.Item>
                  <h3>
                    Total a payer : <br />(
                    {cartItems.reduce((a, c) => a + c.quantity, 0)} items)
                    <br />
                    {cartItems.reduce(
                      (a, c) => a + c.price * c.quantity,
                      0
                    )}{" "}
                    ariary
                  </h3>
                  <div className="d-grid">
                    <Link to="/shipping">
                      <Button
                        type="button"
                        variant="outline-success"
                        disabled={cartItems.length === 0}
                      >
                        Procede au payement.
                      </Button>
                    </Link>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CartTable;
