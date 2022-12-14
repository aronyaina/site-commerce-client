import React from "react";
import imageShop from "../../../assets/image/shop.png";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function WelcomeCard() {
  return (
    <div className="welcomeCart">
      <Container className="containerCart">
        <div className="cubicDiv">
          <img src={imageShop} alt="shopNow" className="imageShop" />
          <div className="cube"></div>
        </div>

        <div className="vl"></div>
        <div className="TextContent">
          <h2>BIENVENUE.</h2>
          <hr />
          <p>
            LE MEILLEUR SITE POUR ACHETER
            <br /> TOUT VOS PRODUIT. <br />
            <span>TROUVEZ.CHOISISSEZ.ACHETER.</span>
          </p>
          <Button variant="outline-secondary">
            <i className="uil uil-shopping-bag"></i>
            <Link to="/buying">ACHETER ICI</Link>
          </Button>
          <Button variant="outline-secondary" className="button2">
            <i className="uil uil-sign-in-alt"></i>
            <Link to="/login">SE CONNECTER</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default WelcomeCard;
