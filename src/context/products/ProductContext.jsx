import { createContext, useReducer } from "react";

import productReducer from "../../reducer/productReducer";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: null,
  });

  return (
    <ProductContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
