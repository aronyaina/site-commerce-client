import React from "react";

function HeaderComponent({ title }) {
  return (
    <div className="HeaderComponent">
      <div class="hr-1"></div>
      <h2>{title}</h2>
      <div class="hr-2"></div>
    </div>
  );
}

export default HeaderComponent;
