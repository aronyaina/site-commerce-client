import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/authentication/useLogout";
import { useAuthContext } from "../../hooks/authentication/useAuthContext";

const NavbarHead = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  const large = "lg";

  return (
    <header>
      <Navbar key={large} bg="light" expand={large} className="mb-3">
        {!user ? (
          <Container fluid>
            <Navbar.Brand href="#">M - Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${large}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${large}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${large}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${large}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav>
                    {" "}
                    <Link to="/buying"> Explorer </Link>
                  </Nav>
                  <Nav>
                    <Link to="/login"> Se connecter </Link>
                  </Nav>
                  <Nav>
                    <Link to="/signup"> S 'inscrire</Link>
                  </Nav>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        ) : (
          <Container fluid>
            <Navbar.Brand href="#">M - Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${large}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${large}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${large}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${large}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link to="/buying">Explorer</Nav.Link>
                  <span>{user.email}</span>
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

      {/* <div className="container">
        <Link to="/home">
          <h1> M - SHOP </h1>{" "}
        </Link>{" "}
        <nav>
          {" "}
          {user ? (
            <div>
              <Link to="/buying"> Explorer </Link> <span> {user.email} </span>{" "}
              <button onClick={handleClick}> Se deconnecter </button>{" "}
            </div>
          ) : (
            <div>
              <Link to="/buying"> Explorer </Link>{" "}
              <Link to="/login"> Se connecter </Link>{" "}
              <Link to="/signup"> S 'inscrire</Link>{" "}
            </div>
          )}{" "}
        </nav>{" "}
      </div>{" "} */}
    </header>
  );
};

export default NavbarHead;
