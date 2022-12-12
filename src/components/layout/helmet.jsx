import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
function Helmet({ title }) {
  return (
    <div>
      <div class="Helmet">
        <h2>{title}</h2>
        <hr />
      </div>
      <Navbar variant="dark">
        <Container className="helmetHeader">
          <Navbar.Brand>{title}</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Navbar.Text className="collapseNavHead">
              <i class="uil uil-shopping-bag"></i>
              <Link to="/cart">PANIER</Link>
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
    </div>
  );
}

export default Helmet;
