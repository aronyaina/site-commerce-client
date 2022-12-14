import "bootstrap/dist/css/bootstrap.css";
import "./styles/authentication/form.css";
import "./styles/home/best.css";
import "./styles/home/cart.css";
import "./styles/home/general.css";
import "./styles/home/header.css";
import "./styles/home/promotion.css";
import "./styles/home/service.css";

import "./styles/index.css";
import "./styles/loading.css";
import "./styles/product.css";
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
