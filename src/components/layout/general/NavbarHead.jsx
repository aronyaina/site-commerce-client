// React import
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Bootstrap
import { Nav,Badge ,NavDropdown,Container,Navbar} from "react-bootstrap";

// Icons
import { UilSignInAlt } from "@iconscout/react-unicons";
import { UilArrowToRight } from "@iconscout/react-unicons";

// Components
import { useCartContext } from "../../../features/shopping/hooks/useCartContext";
import { useLogout } from "../../../features/authentication/hooks/useLogout";
import { useAuthContext } from "../../../features/authentication/hooks/useAuthContext";




// Components nav bar
const NavbarHead = () => {
  // Tout les hooks utiliser
  const { state } = useCartContext();
  const { cart } = state;
  const { logout } = useLogout();
  const { user } = useAuthContext();
  

  const [access, setAccess] = useState(true);
// Use effect verifie l'acces des utilisateurs
  useEffect(() => {
  
    if (user !== null) {
      if (user.roles === "user") {
        setAccess(false);
      }
    } else {
      setAccess(false);
    }
  }, [user, access]);

  // Click  pour se deconnecter
  const handleDisconnect = () => {
    logout();
  };

  // Return components
  return (
    <header className="NavbarHead">
      {!user ? (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/" className="fs-3">
                MI SHOP
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav>
                    <Link to="/cart" className="link-to-nav">
                      PANIER{" "}
                      {cart.cartItems.length > 0 && (
                        <Badge pill bg="danger">
                          {cart.cartItems.length}
                        </Badge>
                      )}
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to="buying" className="link-to-nav">
                      ACHETER
                    </Link>
                  </Nav>
                </Nav>
                <Nav>
                  <NavDropdown title="COMPTE" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to="/login" className="link-to">
                        SE CONNECTER
                      </Link>
                      <UilArrowToRight />
                    </NavDropdown.Item>
                    <NavDropdown.Item>
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
                  <Nav className="mt-0.5">
                    <Link to="/cart" className="link-to-nav">
                      PANIER{" "}
                      {cart.cartItems.length > 0 && (
                        <Badge pill bg="danger">
                          {cart.cartItems.length}
                        </Badge>
                      )}
                    </Link>
                  </Nav>
                  <Nav className="mt-0.5">
                    <Link to="buying" className="link-to-nav">
                      ACHETER
                    </Link>
                  </Nav>
                </Nav>
                <Nav>
                  <NavDropdown title={user.email} id="collasible-nav-dropdown">
                    <NavDropdown.Item className="text-danger">
                      <span onClick={handleDisconnect}>SE DECONNECTER</span>
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
