import React from "react";
import { Button } from "react-bootstrap";

export default function buttonStyle({ buttonName }) {
  return (
    <>
      <Button variant="outline-secondary">{buttonName}</Button>
    </>
  );
}
