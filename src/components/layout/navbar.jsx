import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/authentication/useLogout";
import { useAuthContext } from "../../hooks/authentication/useAuthContext";
import { useCartContext } from "../../hooks/products/useCartContext";

const NavbarHead = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  const { state } = useCartContext();
  console.log(state.cart);
  const { cart } = state;

  return (
    <header>
      <Navbar bg="light" className="mb-3" expand="lg" sticky="top">
        {!user ? (
          <Container fluid>
            <Navbar.Brand>
              {" "}
              <Link to="/home">M - Shop</Link>{" "}
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Naviguer</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    {" "}
                    <Link to="/buying"> Explorer </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/login"> Se connecter </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/signup"> S 'inscrire</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/cart"> Cart</Link>
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.length}
                      </Badge>
                    )}
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        ) : (
          <Container fluid>
            <Navbar.Brand>
              <Link to="/home">M - Shop</Link>{" "}
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Naviguer</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link style={{ "textDecoration ": "None" }}>
                    <Link to="/buying">Explorer</Link>
                  </Nav.Link>
                  <span className="emailSpan">{user.email}</span>
                </Nav>
                <Button variant="outline-danger" onClick={handleClick}>
                  {" "}
                  Se deconnecter
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        )}
      </Navbar>
    </header>
  );
};

export default NavbarHead;
