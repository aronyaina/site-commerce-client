import React from "react";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import _ from "lodash";
import { Col, Row } from "react-bootstrap";
function GridComp(props) {
  const element = React.Children.toArray(props.children);
  const chunks = _.chunk(element, 4);
  return (
    <Container>
      {chunks.map((chunk, index) => (
        <Row key={index} className="justify-content-space-between pl-3">
          {chunk.map((item, index) => (
            <Col key={index} xs={12} md={3}>
              <p>{item}</p>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default GridComp;
