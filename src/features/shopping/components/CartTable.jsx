import { Link } from "react-router-dom";
// BOOTSTRAP
import { Row, Col, ListGroup, Button, Card } from "react-bootstrap";
// CONTEXT
import { useCartContext } from "../hooks/useCartContext";
import MessageBox from "../../../components/layout/general/MessageBox";
// LIB
import axios from "axios";
// REDUCER
import { ACTIONCART } from "../reducers/cartReducer";
import Helmet from "../../../components/layout/general/Helmet";

function CartTable() {
  const { state, dispatch } = useCartContext();

  const {
    cart: { cartItems },
  } = state;

  const onHandleClick = async (item, quantity) => {
    const { data } = await axios.get(`/api/product/${item._id}`);
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
      <Helmet title={"CART"} />
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Le panier est vide.{" "}
              <Link to="/shopping">Acheter des articles</Link>
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
                        varient="Light"
                        disabled={item.quantity === 1}
                        onClick={() => onHandleClick(item, item.quantity - 1)}
                      >
                        <i className="uil uil-minus"></i>
                      </Button>
                      <span>{item.quantity}</span>{" "}
                      <Button
                        varient="Light"
                        disabled={item.quantity === item.stock}
                        onClick={() => onHandleClick(item, item.quantity + 1)}
                      >
                        <i className="uil uil-plus"></i>
                      </Button>
                    </Col>
                    <Col md={3}>{item.price} ariary</Col>
                    <Col md={2}>
                      <Button
                        variant="danger"
                        onClick={() => {
                          onClickRemove(item);
                        }}
                      >
                        <i class="uil uil-trash"></i>
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
                  Total a payer <br />(
                  {cartItems.reduce((a, c) => a + c.quantity, 0)} items)
                  {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}{" "}
                  ariary
                </h3>
              </ListGroup>
              <ListGroup.Item>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CartTable;
