import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.css";
import "./styles/card.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ProductContextProvider } from "./context/products/ProductContext";
import { AuthContextProvider } from "./context/users/AuthContext";
import { CartProvider } from "./context/products/CartContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </AuthContextProvider>
    </CartProvider>
  </React.StrictMode>
);
