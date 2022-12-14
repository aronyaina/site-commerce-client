import React from "react";
import { Container } from "react-bootstrap";
function PromotionCard({ title, texte1, texte2, img, order }) {
  return order === 1 ? (
    <div className="promotionCart">
      <Container className="promotionCartContainer">
        <div className="promotionText">
          <hr />
          <h3>{title}</h3>
          <p>{texte1}</p>
          <p>{texte2}</p>
        </div>
        <div className="vl"></div>
        <div className="imagePromotion">
          <img src={img} alt="Article en promotion" />
        </div>
      </Container>
    </div>
  ) : (
    <div className="promotionCart">
      <Container className="promotionCartContainer">
        <div className="imagePromotion">
          <img src={img} alt="Article en promotion" />
        </div>
        <div className="vl"></div>
        <div className="promotionText">
          <hr />
          <h3>{title}</h3>
          <p>{texte1}</p>
          <p>{texte2}</p>
        </div>
      </Container>
    </div>
  );
}

export default PromotionCard;
