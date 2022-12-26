import React from "react";

function HeaderComponent({ title }) {
  return (
    <div className="HeaderComponent">
      <div className="hr-1"></div>
      <h2>{title}</h2>
      <div className="hr-2"></div>
    </div>
  );
}

export default HeaderComponent;
