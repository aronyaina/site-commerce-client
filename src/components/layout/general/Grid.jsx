// Import react and lodash 
import React from "react";
import _ from "lodash";

// Import react bootstrap 
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

// Grid component
function GridComp(props) {
  const element = React.Children.toArray(props.children);
  const chunks = _.chunk(element, props.division);
  const responsive = 12 / props.division 
  return (
    <Container fluid>
      {chunks.map((chunk, index) => (
        <Row key={index} className="justify-content-space-between pl-3">
          {chunk.map((item, index) => (
            <Col key={index} xs={12} s={12} md={6} lg={responsive}>
              {item}
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default GridComp;
