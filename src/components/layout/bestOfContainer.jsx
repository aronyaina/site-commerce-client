import React from "react";
import BestOfCard from "./bestOfCard";
import { Container } from "react-bootstrap";
import imageVetement from "../../assets/image/vetement1.jpg";
function BestOfContainer() {
  return (
    <div className="bestOfComponents">
      <hr />
      <h1>NOS BEST OF</h1>

      <Container className="bestContainer">
        <BestOfCard
          img={imageVetement}
          title={"VETEMENTS"}
          texte={"SPORT , PLAGE , ~\n TOUS DE DIFFERENT TYPE"}
        />
      </Container>
    </div>
  );
}

export default BestOfContainer;
