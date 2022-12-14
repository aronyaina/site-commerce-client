// REACT AND BOOSTRAP
import React from "react";
import { Container } from "react-bootstrap";
// COMPONENT
import BestOfCard from "./BestOfCard";
import HeaderComponent from "../general/HeaderTitle";
// ASSET
import imageVetement from "../../../assets/image/vetement1.jpg";
import imageComputer from "../../../assets/image/ordinateur1.jpg";
import imageChaise from "../../../assets/image/chaise1.jpg";

function BestOfContainer() {
  return (
    <div className="bestOfComponents">
      <HeaderComponent title="NOS BEST OF" />

      <Container className="bestContainer">
        <BestOfCard
          img={imageVetement}
          title={"VETEMENTS"}
          texte={"SPORT , PLAGE ,TOUS DIFFERENT"}
        />
        <BestOfCard
          img={imageComputer}
          title={"INFORMATIQUE"}
          texte="TOUT LES OUTILS INFORMATIQUES"
        />
        <BestOfCard
          img={imageChaise}
          title={"INTERIEUR"}
          texte={"TABLE , CHAISE , LIT"}
        />
      </Container>
    </div>
  );
}

export default BestOfContainer;
