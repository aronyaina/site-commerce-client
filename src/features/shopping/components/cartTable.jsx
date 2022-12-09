import { useCartContext } from "../hooks/useCartContext";
import { Row, Col, ListGroup, Button, Card } from "react-bootstrap";
import MessageBox from "../../../components/layout/messageBox";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { ACTIONCART } from "../reducers/cartReducer";

function CartTable() {
  const { state, dispatch } = useCartContext();

  const {
    cart: { cartItems },
  } = state;

  const onHandleClick = async (item, quantity) => {
    const { data } = await axios.get(`/product/${item._id}`);
    if (data.quantity < quantity) {
      window.alert("Stock epuise !");
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
      <h1>Shopping Cart</h1>

      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Le panier est vide.{" "}
              <Link to="/shopping">Acheter des articles</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
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
                        varient="Light"
                        disabled={item.quantity === 1}
                        onClick={() => onHandleClick(item, item.quantity - 1)}
                      >
                        <span className="material-symbols-outlined">
                          remove
                        </span>
                      </Button>
                      <span>{item.quantity}</span>{" "}
                      <Button
                        varient="Light"
                        disabled={item.quantity === item.stock}
                        onClick={() => onHandleClick(item, item.quantity + 1)}
                      >
                        <span className="material-symbols-outlined">add</span>
                      </Button>
                    </Col>
                    <Col md={3}>${item.price}</Col>
                    <Col md={2}>
                      <Button
                        variant="light"
                        onClick={() => {
                          onClickRemove(item);
                        }}
                      >
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </Button>
                    </Col>
                  </Row>
                  <Row className="align-items-center"></Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <h3>
                  Subtotal({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                  items):$
                  {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                </h3>
              </ListGroup>
              <ListGroup.Item>
                <div className="d-grid">
                  <Link to="/shipping">
                    <Button
                      type="button"
                      variant="light"
                      disabled={cartItems.length === 0}
                    >
                      Procede au payement.
                    </Button>
                  </Link>
                </div>
              </ListGroup.Item>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CartTable;