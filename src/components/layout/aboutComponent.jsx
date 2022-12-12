import React from "react";
import HeaderComponent from "./headerComponent";
import { Container } from "react-bootstrap";
function AboutComponent() {
  return (
    <div className="aboutComponents" id="about">
      <HeaderComponent title="A PROPOS DE NOUS" />
      <Container className="aboutContainer">
        <div className="contact">
          <h3>Contact</h3>
          <div className="icons">
            <i className="uil uil-airplay"></i>
            <i className="uil uil-instagram-alt"></i>
            <i className="uil uil-envelope-alt"></i>
            <i className="uil uil-phone"></i>
          </div>
        </div>
        <div className="parcours">
          <h3>Parcours</h3>
          <p>
            Developpeur.maintenance,deployement.
            <br />
            <a href="#">En savoir plus</a>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default AboutComponent;
