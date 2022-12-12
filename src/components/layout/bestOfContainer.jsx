import React from "react";
import BestOfCard from "./bestOfCard";
import { Container } from "react-bootstrap";
import imageVetement from "../../assets/image/vetement1.jpg";
import imageComputer from "../../assets/image/ordinateur1.jpg";
import imageChaise from "../../assets/image/chaise1.jpg";
import HeaderComponent from "./headerComponent";
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
