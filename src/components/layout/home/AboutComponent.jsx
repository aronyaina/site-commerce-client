import React from "react";
import HeaderComponent from "../general/HeaderTitle";
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
          <h6>
            Developpement,maintenance,deployement.
            <br />
            <br />
            <a href="#">En savoir plus</a>
          </h6>
        </div>
      </Container>
    </div>
  );
}

export default AboutComponent;
