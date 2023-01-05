// REACT
import React from "react";
import { Link } from "react-router-dom";

// Bootstrap
import imageShop from "../../../assets/image/shop.png";
import { Container, Button } from "react-bootstrap";

// Components
import GridComp from "../general/Grid";
function WelcomeCard() {
  return (
    <Container className="containerCart">
      <GridComp division={2}>
        <div className="TextContent">
          <h2>BIENVENUE.</h2>
          <hr />
          <p>
            LE MEILLEUR SITE POUR ACHETER
            <br /> TOUT VOS PRODUIT. <br />
            TROUVEZ ET ACHETER.
          </p>
          <Button variant="outline-secondary" className="button1">
            <i className="uil uil-shopping-bag"></i>
            <Link to="/buying" className="link-to-welcome">ACHETER ICI</Link>
          </Button>
          <Button variant="outline-secondary" className="button2">
            <i className="uil uil-sign-in-alt"></i>
            <Link to="/login" className="link-to-welcome">SE CONNECTER</Link>
          </Button>
        </div>
        
        <div className="cubicDiv" >
          <img src={imageShop} alt="shopNow" className="imageShop" />
          <div className="cube"></div>
        </div>
        {/* <div className="vl"></div> */}
      </GridComp>
    </Container>
  );
}

export default WelcomeCard;
