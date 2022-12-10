import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ACTIONCART } from "../../shopping/reducers/cartReducer";
import { useCartContext } from "../../shopping/hooks/useCartContext";
import CheckoutSteps from "../../../components/layout/checkoutSteps";
function formShipping() {
  const { state, dispatch } = useCartContext();
  const {
    cart: { shippingAddress },
  } = state;

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  console.log("shipping address :", shippingAddress);
  useEffect(() => {
    if (shippingAddress) {
      setFullName(shippingAddress.fullName);
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
  }, []);

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
    <div>
      <h1>Condition de payement</h1>
      <CheckoutSteps step1 step2 />
      <div className="container small-container">
        <h1 className="my-3">Adresse de livraison</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>Ville</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Code Postal</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Pays</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group>
          <div className="mb-3">
            <Button
              variant="outline-dark"
              type="submit"
              onClick={submitHandler}
            >
              <Link to="/payement">Continue</Link>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default formShipping;
