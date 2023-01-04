import React from "react";
import HeaderComponent from "../general/HeaderTitle";
import { UilAirplay } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilEnvelopes } from "@iconscout/react-unicons";
import { UilPhone } from "@iconscout/react-unicons";
import { Container } from "react-bootstrap";
function AboutComponent() {
  return (
    <footer className="aboutComponents" id="about">
      <HeaderComponent title="A PROPOS DE NOUS" />
      <Container className="aboutContainer">
        <div className="contact">
          <h3>Contact</h3>
          <div className="icons">
            <UilAirplay />
            <UilInstagram />
            <UilEnvelopes />
            <UilPhone />
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
      <div
        className="text-center p-3"
        style={{ color: "rgba(255, 255, 255, 0.4)" }}
      >
        &copy; {new Date().getFullYear()} Copyright .{" "}
      </div>
    </footer>
  );
}

export default AboutComponent;
