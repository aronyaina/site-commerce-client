import React, { useState, useEffect } from "react";

import CheckoutSteps from "../../../components/layout/shopping/CheckoutSteps";
import { Form, Button ,Card} from "react-bootstrap";
import { useCartContext } from "../../shopping/hooks/useCartContext";
import { Link, useNavigate } from "react-router-dom";
import { ACTIONCART } from "../../shopping/reducers/cartReducer";
import HeaderComponent from "../../../components/layout/general/HeaderTitle";
import MessageBox from "../../../components/layout/general/MessageBox";
export default function PayementCheckout() {
  const { state, dispatch } = useCartContext();
  const navigate = useNavigate();
  const {
    cart: { cart, payementMethod, shippingAddress },
  } = state;
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONCART.SAVE_PAYEMENT_METHOD,
      payload: payementMethodName,
    });
    localStorage.setItem("payementMethod", JSON.stringify(payementMethodName));
  };

  const [payementMethodName, setPayementMethod] = useState(
    payementMethod || "mvola"
  );

  return (
    <div className="payementCheckout">
      <HeaderComponent title={"PAYEMENT"} />
      <CheckoutSteps step1 step2 step3 />

      <div className="container small-container ">
      <MessageBox title="" variant="success">Choississez le moyen de payement qui vous convient.</MessageBox>
        <Card body >
          <Form className="mb-4">
            <Form.Check
              type="radio"
              id="mvola"
              label="MVOLA"
              value="mvola"
              checked={payementMethodName === "mvola"}
              onChange={(e) => setPayementMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              id="orange"
              label="ORANGE MONEY"
              value="orange"
              checked={payementMethodName === "orange"}
              onChange={(e) => setPayementMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              id="airtel"
              label="AIRTEL"
              value="airtel"
              checked={payementMethodName === "airtel"}
              onChange={(e) => setPayementMethod(e.target.value)}
            ></Form.Check>
            <Button onClick={onSubmitHandler} variant="warning">
              <Link
                to="/placeorder"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                accepter
              </Link>
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}
