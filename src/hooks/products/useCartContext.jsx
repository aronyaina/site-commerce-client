import { CartContext } from "../../context/products/CartContext";
import { useContext } from "react";

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw Error(
      "Use Cart Context devrait etre utilise dans usecartcontext hook"
    );
  }

  return context;
};
