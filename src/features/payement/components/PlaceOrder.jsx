import React from "react";
import { useEffect, useReducer, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import CheckoutSteps from "../../../components/layout/shopping/CheckoutSteps";
import HeaderComponent from "../../../components/layout/general/HeaderTitle";
import { useCartContext } from "../../shopping/hooks/useCartContext";
import { useAuthContext } from "../../authentication/hooks/useAuthContext";
import LoadingBox from "../../../components/layout/general/LoadingBox";
import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import TemporaryMessage from "../../../components/layout/general/TemporaryMessage";

import loadingReducer, {
  ACTIONLOAD,
} from "../../shopping/reducers/loadingReducer";
import axios from "axios";
import { ACTIONCART } from "../../shopping/reducers/cartReducer";
import MessageBox from "../../../components/layout/general/MessageBox";
function Placeorder() {
  const { state, dispatch: cartDispatch } = useCartContext();
  const { user } = useAuthContext();
  const [{ loading, error }, dispatch] = useReducer(loadingReducer, {
    loading: false,
    error: "",
  });
  const navigate = useNavigate();
  const { cart } = state;
  const [isValid, setValidation] = useState(false);

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? round2(5000) : round2(10000);
  cart.taxPrice = round2(0.001 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const config = {
    url: "/api/order",
    data: {
      orderItems: cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.payementMethod,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice,
      user: user.email,
    },
    header: {
      headers: {
        "Content-Type": "application/json",
        "content-type": "application/json;charset=utf-8",
        Authorization: `Bearer ${user.token}`,
      },
    },
  };

  const placeOrderHandler = async () => {
    dispatch({ type: ACTIONLOAD.FETCH_REQUEST });
    axios
      .post(config.url, config.data, config.header)
      .then((response) => {
        // console.log("response of requete:",response);
        // const parse = JSON.parse(response);
        // console.log("Response converted:",parse);

        dispatch({ type: ACTIONLOAD.FETCH_SUCCESS });
        cartDispatch({ type: ACTIONCART.DEL_SHIPPING_ADDRESS_AND_CART });
        setValidation(true);
        navigate("/success")
      })
      .catch((error) => {
        const err = JSON.stringify(error.response.data.error);
        
        dispatch({
          type: ACTIONLOAD.FETCH_FAILURE,
          payload: err,
        });
        
      });
  };

  useEffect(() => {
    if (!cart.payementMethod) {
      navigate("/payement");
    }
    
  }, [cart, navigate]);

  return (
    <div className="placeOrder">
      <HeaderComponent title={"TOUT LES COMMANDE"} />
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Commande</Card.Title>
              <Card.Text>
                <strong>Nom : </strong> {cart.shippingAddress.fullName} <br />
                <strong>Addresse : </strong> {cart.shippingAddress.address},
                {cart.shippingAddress.city},{cart.shippingAddress.postalCode},
                {cart.shippingAddress.state}
                {cart.shippingAddress.country}
              </Card.Text>
              <hr />
              <Link
                to="/shipping"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="outline-dark">Modifier</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Payement</Card.Title>
              <Card.Text>
                <strong>Methode : </strong>
                {cart.payementMethod}
              </Card.Text>
              <hr />
              <Link
                to="/payement"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="outline-dark">Modifier</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Tout les articles</Card.Title>
              <ListGroup variant="flush">
                {cart.cartItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>{item.name}</Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>{item.price}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <hr />
              <Link
                to="/cart"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="outline-dark">Modifier</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Apercu du commande :</Card.Title>
              <ListGroup variant="success">
                <Row>
                  <Col>Total des items:</Col>
                  <Col>{cart.itemsPrice.toFixed(2)} Ar</Col>
                </Row>
              </ListGroup>
              <ListGroup variant="flush">
                <Row>
                  <Col>Livraisons</Col>
                  <Col>{cart.shippingPrice.toFixed(2)} Ar</Col>
                </Row>
              </ListGroup>
              <ListGroup variant="flush">
                <Row>
                  <Col>Taxes a payer</Col>
                  <Col>{cart.taxPrice.toFixed(2)} Ar</Col>
                </Row>
              </ListGroup>
              <ListGroup variant="flush">
                <Row>
                  <Col>Total a payer :</Col>
                  <Col>{cart.totalPrice.toFixed(2)} Ar</Col>
                </Row>
              </ListGroup>
              <ListGroup variant="flush">
                <div className="d-grid">
                  <Button
                    type="button"
                    onClick={placeOrderHandler}
                    disabled={cart.cartItems.length = 0}
                  >
                    Valider la commande.
                  </Button>
                </div>
                  {error ? (
                    <TemporaryMessage variant="danger">{error}</TemporaryMessage>
                  ) : (
                    <></>
                  )}

                  {isValid ? (
                    <TemporaryMessage variant="success">
                      Commande prise en compte.
                    </TemporaryMessage>
                  ) : (
                    <></>
                  )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Placeorder;
