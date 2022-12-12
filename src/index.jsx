import "bootstrap/dist/css/bootstrap.css";
import "./styles/heading.css";
import "./styles/index.css";
import "./styles/card.css";
import "./styles/bodyHome.css";
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
