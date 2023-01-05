import "bootstrap/dist/css/bootstrap.css";

import "./styles/general.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { ProductContextProvider } from "./features/stocking/context/ProductContext";
import { AuthContextProvider } from "./features/authentication/contexts/AuthContext";
import { CartProvider } from "./features/shopping/context/CartContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
