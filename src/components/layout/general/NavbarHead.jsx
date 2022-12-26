import Container from "react-bootstrap/Container";
import { UilSignInAlt } from "@iconscout/react-unicons";
import { UilArrowToRight } from "@iconscout/react-unicons";
import { UilHome } from "@iconscout/react-unicons";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { UilShoppingCart } from "@iconscout/react-unicons";

import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button, Badge } from "react-bootstrap";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../features/shopping/hooks/useCartContext";
import { useLogout } from "../../../features/authentication/hooks/useLogout";
import { useAuthContext } from "../../../features/authentication/hooks/useAuthContext";
const NavbarHead = () => {
  const { state } = useCartContext();
  const { cart } = state;
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const [access, setAccess] = useState(true);
  useEffect(() => {
    if (user !== null) {
      if (user.roles === "user") {
        setAccess(false);
      }
    } else {
      setAccess(false);
    }
  }, [user, access, setAccess]);

  const handleClick = () => {
    logout();
  };

  return (
    <header className="NavbarHead">
      {!user ? (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">MI SHOP</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/cart">
                    PANIER{" "}
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.length}
                      </Badge>
                    )}
                  </Nav.Link>
                  <Nav.Link href="/buying">ACHETER</Nav.Link>
                </Nav>
                <Nav>
                  <NavDropdown title="COMPTE" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to="/login" className="link-to">
                        SE CONNECTER
                      </Link>
                      <UilArrowToRight />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/signup">
                      <Link to="/signup" className="link-to">
                        S'INSCRIRE
                      </Link>
                      <UilSignInAlt />
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">MI SHOP</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/cart">
                    PANIER
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.length}
                      </Badge>
                    )}
                  </Nav.Link>
                  <Nav.Link href="/buying">ACHETER</Nav.Link>
                </Nav>
                <Nav>
                  <NavDropdown title={user.email} id="collasible-nav-dropdown">
                    <NavDropdown.Item className="text-danger">
                      <span onClick={handleClick}>SE DECONNECTER</span>
                    </NavDropdown.Item>

                    {access ? (
                      <NavDropdown.Item>
                        <Link to="/dashboard" className="link-to">
                          DASHBOARD
                        </Link>
                      </NavDropdown.Item>
                    ) : (
                      <></>
                    )}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
    </header>
  );
};

export default NavbarHead;
