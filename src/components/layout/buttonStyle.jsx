import React from "react";
import { Button } from "react-bootstrap";

export default function buttonStyle({ buttonName, onHandleClick, classNamee }) {
  return (
    <>
      <Button
        variant="outline-secondary"
        onClick={onHandleClick}
        className={classNamee}
      >
        {buttonName}
      </Button>
    </>
  );
}
