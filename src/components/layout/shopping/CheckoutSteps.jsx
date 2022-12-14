import React from "react";
import { Row, Col } from "react-bootstrap";
export default function checkoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Row className="checkout-steps">
      <Col className={step1 ? "active" : ""}>S'inscrire</Col>
      <Col className={step2 ? "active" : ""}>Envoie</Col>
      <Col className={step3 ? "active" : ""}>Payement</Col>
      <Col className={step4 ? "active" : ""}>Commande</Col>
    </Row>
  );
}
