import { createContext, useReducer } from "react";
import cartReducer, { initialState } from "../reducers/cartReducer";

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = {
    state,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
