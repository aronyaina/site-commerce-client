import React from "react";
import Helmet from "../../components/layout/helmet";
import WelcomeCard from "../../components/layout/welcomeCard";
import PromotionCard from "../../components/layout/promotionCard";
import promImage1 from "../../assets/image/nike-orange2.jpg";
import promImage2 from "../../assets/image/nike-vert1.jpg";

import BestOfContainer from "../../components/layout/bestOfContainer";
export default function Home() {
  return (
    <div>
      <Helmet title={"ACCEUIL"} />
      <WelcomeCard />
      <PromotionCard
        title={"PROMOTION"}
        texte1={"ACHETER LE PLUS D’ARTICLE POSSIBLE "}
        texte2={"POUR AVOIR UNE REDUCTION DE -30%"}
        order={1}
        img={promImage1}
      />
      <PromotionCard
        title={"PROMOTION"}
        texte1={"DEJA DES MILLIARDS DE CLIENT"}
        texte2={"SATISFAIT ,\n POUR -25%  SUR"}
        order={2}
        img={promImage2}
      />
      <BestOfContainer />
    </div>
  );
}
