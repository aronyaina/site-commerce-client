import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useLogout } from "../../features/authentication/hooks/useLogout";
import { useAuthContext } from "../../features/authentication/hooks/useAuthContext";
import { useCartContext } from "../../features/shopping/hooks/useCartContext";

const NavbarHead = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  return (
    <header className="NavbarHead">
      <Navbar className="mb-3" expand="lg">
        {!user ? (
          <Container>
            <Navbar.Brand className="brand-heading">
              <Link to="/home">MI-SHOP</Link>{" "}
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas placement="end">
              <Offcanvas.Header>hello world</Offcanvas.Header>
              <Offcanvas.Body>
                <div className="connectNav">
                  <Link to="/login" className="item item-1">
                    {" "}
                    <span className="material-symbols-outlined">
                      box-arrow-in-right
                    </span>
                    Se connecter{" "}
                  </Link>
                  <Link to="/signup" className="item item-2">
                    {" "}
                    S 'inscrire
                  </Link>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        ) : (
          <Container fluid className="nav-container">
            <Navbar.Brand className="brand-heading">
              <Link to="/home">MI-SHOP</Link>{" "}
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Naviguer</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <span className="emailSpan">{user.email}</span>
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
