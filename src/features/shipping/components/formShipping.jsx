import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ACTIONCART } from "../../shopping/reducers/cartReducer";
import { useCartContext } from "../../shopping/hooks/useCartContext";
import CheckoutSteps from "../../../components/layout/shopping/CheckoutSteps";
import HeaderComponent from "../../../components/layout/general/HeaderTitle";
function formShipping() {
  const { state, dispatch } = useCartContext();
  const {
    cart: { shippingAddress },
  } = state;

  useEffect(() => {
    if (shippingAddress) {
      setFullName();
      setAddress(shippingAddress.address);
      setCity(shippingAddress.city);
      setPostalCode(shippingAddress.postalCode);
      setCountry(shippingAddress.country);
    } else if (!shippingAddress) {
      setFullName("");
      setAddress("");
      setCity("");
      setPostalCode("");
      setCountry("");
    }
  }, [shippingAddress]);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: ACTIONCART.SAVE_SHIPPING_ADDRESS,
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });

    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
  };
  return (
    <div className="formShipping">
      <HeaderComponent title={"FORMULAIRE DE PAYEMENT"} />
      <CheckoutSteps step1 step2 />
      <div className="container small-container">
        <Form>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              value={fullName}
              name={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              value={address}
              name={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>Ville</Form.Label>
            <Form.Control
              value={city}
              name={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Code Postal</Form.Label>
            <Form.Control
              value={postalCode}
              name={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Pays</Form.Label>
            <Form.Control
              value={country}
              name={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group>
          <div className="mb-3">
            <Button
              className="payementButton"
              variant="success"
              type="submit"
              onClick={submitHandler}
            >
              <Link
                to="/payement"
                style={{ textDecoration: "none", color: "white" }}
              >
                Continue
              </Link>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default formShipping;
