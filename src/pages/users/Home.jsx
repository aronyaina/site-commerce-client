import React from "react";

import WelcomeCard from "../../components/layout/home/WelcomeCard";
import PromotionCard from "../../components/layout/home/PromotionCard";
import promImage1 from "../../assets/image/nike-orange2.jpg";
import promImage2 from "../../assets/image/ordinateur4.jpg";
import ServiceComponents from "../../components/layout/shopping/serviceComponents";
import BestOfContainer from "../../components/layout/home/BestOfComponent";
import Footer from "../../components/layout/home/AboutComponent";
import HeaderComponent from "../../components/layout/general/HeaderTitle";

export default function Home() {
  return (
    <>
        <HeaderComponent title="ACCEUIL" />
        <WelcomeCard />
        <HeaderComponent title="PROMOTION" />
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

        <ServiceComponents />
    </>
  );
}
