import React from "react";

import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>m-shop</h1>
        </Link>
        <Link to="/">
          <p>Acceuil</p>
        </Link>
        <Link to="/">
          <p>Shop</p>
        </Link>
        <Link to="/">
          <p>About</p>
        </Link>
        <Link to="/">
          <h1>LOGIN</h1>
        </Link>
      </div>{" "}
    </header>
  );
}
