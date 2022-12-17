import React from "react";
import { Container } from "react-bootstrap";
import Image1 from "../../../assets/image/service1.jpg";
import Image2 from "../../../assets/image/service3.jpg";
import HeaderComponent from "../general/HeaderTitle";
function ServiceComponents() {
  return (
    <div className="ServiceComponents" id="service">
      <HeaderComponent title="NOS SERVICE" />
      <Container className="SeviceContainer">
        <div className="Item1">
          <h1>GRATUIT</h1>
          <img src={Image1} alt=""></img>
        </div>
        <div className="Item2">
          <h1>GARANTIE</h1>
          <img src={Image2} alt=""></img>
        </div>
      </Container>
    </div>
  );
}

export default ServiceComponents;