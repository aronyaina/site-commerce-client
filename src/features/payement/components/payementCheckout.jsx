import React, { useState, useEffect } from "react";
import CheckoutSteps from "../../../components/layout/checkoutSteps";
import { Form, Button } from "react-bootstrap";
import { useCartContext } from "../../shopping/hooks/useCartContext";
import { Link, useNavigate } from "react-router-dom";
import { ACTIONCART } from "../../shopping/reducers/cartReducer";

export default function payementCheckout() {
  const { state, dispatch } = useCartContext();
  const navigate = useNavigate();
  const {
    cart: { cart, payementMethod, shippingAddress },
  } = state;
  useEffect(() => {
    if (shippingAddress.address === "") {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONCART.SAVE_PAYEMENT_METHOD,
      payload: payementMethodName,
    });
    localStorage.setItem("payementMethod", payementMethodName);
  };

  const [payementMethodName, setPayementMethod] = useState(
    payementMethod || "mvola"
  );

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />

      <div className="container small-container">
        <h2>Methode de payement.</h2>
        <Form>
          <Form.Check
            type="radio"
            id="mvola"
            label="mvola"
            value="mvola"
            checked={payementMethodName === "mvola"}
            onChange={(e) => setPayementMethod(e.targe.value)}
          ></Form.Check>
          <Form.Check
            type="radio"
            id="orange"
            label="orange"
            value="orange"
            checked={payementMethodName === "orange"}
            onChange={(e) => setPayementMethod(e.targe.value)}
          ></Form.Check>
          <Form.Check
            type="radio"
            id="airtel"
            label="airtel"
            value="airtel"
            checked={payementMethodName === "airtel"}
            onChange={(e) => setPayementMethod(e.targe.value)}
          ></Form.Check>
          <Button onClick={onSubmitHandler}>
            <Link to="/placeorder">accepter</Link>
          </Button>
        </Form>
      </div>
    </div>
  );
}
