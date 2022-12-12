import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useLogout } from "../../features/authentication/hooks/useLogout";
import { useAuthContext } from "../../features/authentication/hooks/useAuthContext";
import { useCartContext } from "../../features/shopping/hooks/useCartContext";
import Helmet from "./helmet";
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
          <Container className="nav-container">
            <Navbar.Brand className="brand-heading">
              <Link to="/home">MI-SHOP</Link>{" "}
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas placement="end">
              <Offcanvas.Header>Parametre de connexions</Offcanvas.Header>
              <Offcanvas.Body>
                <div className="connectNav">
                  <Link to="/login" className="item item-1">
                    {" "}
                    <i class="uil uil-signin"></i>
                    Se connecter{" "}
                  </Link>
                  <Link to="/signup" className="item item-2">
                    {" "}
                    <i class="uil uil-angle-double-down"></i>S 'inscrire
                  </Link>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        ) : (
          <Container className="nav-container">
            <Navbar.Brand className="brand-heading">
              <Link to="/">MI-SHOP</Link>{" "}
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
                  <i class="uil uil-signout"></i>
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
