import React from "react";
import { Alert } from "react-bootstrap";
function MessageBox(props) {
  return (
    <div className="MessageBox">
      <Alert variant={props.variant || "warning"}>{props.children}</Alert>
    </div>
  );
}

export default MessageBox;
