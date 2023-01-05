// import react
import React from "react";

// import bootstrap 
import { Alert } from "react-bootstrap";

// create components message box
function MessageBox(props) {
  return (
    <div className="MessageBox">
      <Alert variant={props.variant || "warning"}>{props.children}</Alert>
    </div>
  );
}

export default MessageBox;
