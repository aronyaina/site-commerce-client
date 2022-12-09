import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw Error(
      "Use Product Context must be used inside an ProductContextProvider"
    );
  }

  return context;
};
