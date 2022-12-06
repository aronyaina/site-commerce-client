import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.css";
import "./styles/card.css";
import { ProductContextProvider } from "./context/products/ProductContext";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
