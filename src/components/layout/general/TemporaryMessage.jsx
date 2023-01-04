import React from "react";

import Toast from 'react-bootstrap/Toast';
import { useState } from "react";
function TemporaryMessage(props) {
const [show, setShow] = useState(props.showed);
  return (
    <div className="temporaryMess">
      <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide bg={props.variant || "warning"} className="Toast mt-3">
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{props.title}</strong>
        </Toast.Header>
        <Toast.Body>{props.children}</Toast.Body>
      </Toast>
    </div>
  );
}

export default TemporaryMessage;
