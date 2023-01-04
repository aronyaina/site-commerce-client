import React from "react";
import { Container } from "react-bootstrap";
import GridComp from "../general/Grid";
function PromotionCard({ title, texte1, texte2, img, order }) {
  return order === 1 ? (
    <div className="promotionCart">
   
      <Container className="promotionCartContainer">
      <GridComp division={2}>
      <div className="promotionText">
          <hr />
          <h3>{title}</h3>
          <p>{texte1}</p>
          <p>{texte2}</p>
        </div>
        <div className="imagePromotion">
          <img src={img} alt="Article en promotion" />
        </div>
      </GridComp> 
      </Container>
    </div>
  ) : (
    <div className="promotionCart">
    <Container className="promotionCartContainer">
    <GridComp division={2}>
    <div className="imagePromotion">
          <img src={img} alt="Article en promotion" />
        </div>
        
        <div className="promotionText">
          <hr />
          <h3>{title}</h3>
          <p>{texte1}</p>
          <p>{texte2}</p>
        </div>
    </GridComp>
      
       
      </Container>
    </div>
  );
}

export default PromotionCard;
