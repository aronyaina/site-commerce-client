import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
import TemporaryMessage from "../../../components/layout/general/TemporaryMessage";
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

  const onClickAdd = async (item, quantity) => {
    const { data } = await axios.get(`/api/product/${item._id}`);
    if (data.quantity < quantity) {
      setInStock(false);
      return;
    }
    else if(data.quantity > quantity){
      setInStock(true);
      
    }

    dispatch({
      type: ACTIONCART.ADD_TO_CART,
      payload: { ...item, quantity: quantity },
    });
  };

  const onClickRemove = (item) => {
    dispatch({ type: ACTIONCART.DEL_TO_CART, payload: item });
    setInStock(true);
  };


  return (
    <div className="cartTable"> 
      <HeaderComponent title={"PANIER"} />

      <Row>
      <Col md={3} sm={12}>
        
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
          {inStock ? (
          <></>
        ) : (
          <TemporaryMessage variant="warning" showed={!inStock} title="Articles">
            En rupture de stock !
          </TemporaryMessage>
        )}
        </Col>
        <Col md={9} sm={12}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Le panier est vide. <Link to="/buying">Acheter des articles</Link>
            </MessageBox>
          ) : (
            <ListGroup className="listGroupCart">
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id} className="listItem">
                  <Row className="align-items-center">
                    <Col md={4} sm={3} xs={3} >
                      {item.name}
                    </Col>
                    <Col md={3} sm={3} xs={4}> 
                      <Button
                        className="border-0"
                        variant="outline-danger"
                        disabled={item.quantity === 1}
                        onClick={() => onClickAdd(item, item.quantity - 1)}
                      >
                        <UilMinusCircle />
                      </Button>
                      <span>{item.quantity}</span>{" "}
                      <Button
                        className="border-0"
                        variant="outline-success"
                        disabled={!inStock}
                        onClick={() => onClickAdd(item, item.quantity + 1)}
                      >
                        <UilPlusCircle />
                      </Button>
                    </Col>
                    <Col md={3} sm={3} xs={3}>{item.price} ariary</Col>
                    <Col md={2} sm={3} xs={2}>
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
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        
      </Row>
      
    </div>
  );
}

export default CartTable;
