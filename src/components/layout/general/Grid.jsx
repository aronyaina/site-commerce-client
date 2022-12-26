import React from "react";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";
function GridComp(props) {
  const maxColums = 4;
  const maxSize = 12;
  const childrenCount = React.Children.count(props.children);

  const [grid, setGrid] = useState(true);

  const [lg, setLg] = useState(12);
  const [md, setMd] = useState(12);
  const [sm, setSm] = useState(12);

  useEffect(() => {
    if (childrenCount > maxColums) {
      setGrid(false);
    }
    if (grid) {
      setLg(maxSize / childrenCount);
      setMd(maxSize / childrenCount);
      setSm(maxSize);
    }
  }, [childrenCount, grid]);

  const children = React.Children.map(props.children, (child) => {
    return (
      <Col lg={lg} md={md} sm={sm}>
        {child}
      </Col>
    );
  });

  return (
    <Container>
      {grid ? (
        <Row className="justify-content-space-between pl-3">{children}</Row>
      ) : (
        <GridComp />
      )}
    </Container>
  );
}

export default GridComp;
