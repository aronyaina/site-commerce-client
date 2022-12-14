import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Badge } from "react-bootstrap";

import { useCartContext } from "../../../features/shopping/hooks/useCartContext";
function Helmet({ title }) {
  const { state } = useCartContext();
  const { cart } = state;
  return (
    <div>
      <Navbar variant="dark">
        <Container className="helmetHeader">
          <Navbar.Brand>{title}</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Navbar.Text className="collapseNavHead">
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.length}
                </Badge>
              )}
              <i class="uil uil-shopping-bag"></i>

              <Link to="/cart">PANIERS</Link>
            </Navbar.Text>
            <Navbar.Text href="#service" className="collapseNavHead">
              <i class="uil uil-setting"></i>
              SERVICE
            </Navbar.Text>
            <Navbar.Text href="#about" className="collapseNavHead">
              <i class="uil uil-user-check"></i>A PROPOS
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Helmet;
