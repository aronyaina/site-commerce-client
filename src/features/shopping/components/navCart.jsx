import React from "react";

import { useCartContext } from "../hooks/useCartContext";

function navCart() {
  const { state } = useCartContext();
  console.log(state.cart);
  console.log(state.cart);
  const { cart } = state;

  return (
    <div>
      <Nav className="justify-content-end flex-grow-1 pe-3">
        {" "}
        <Link to="/buying"> Acheter des articles. </Link>
        <Link to="/cart"> Cart</Link>
        {cart.cartItems.length > 0 && (
          <Badge pill bg="danger">
            {cart.cartItems.length}
          </Badge>
        )}
        <span className="material-symbols-outlined">Paniers</span>
      </Nav>
    </div>
  );
}

export default navCart;
