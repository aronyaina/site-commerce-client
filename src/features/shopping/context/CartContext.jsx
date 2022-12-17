import { createContext, useReducer } from "react";
import cartReducer, { initialState } from "../reducers/cartReducer";

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // const addtoCart = () => {
  //   dispatch({
  //     type: ACTIONCART.ADD_TO_CART,
  //     payload: { ...product, quantity: 1 },
  //   });
  // };
  // const addToCart = (cartProduct) => {
  //   const stock = cartProduct.stock;
  //   const productCart = {
  //     id: cartProduct.id,
  //     name: cartProduct.name,
  //     price: cartProduct.price,
  //     cartStock: 1,
  //   };
  //   const updateCart = state.products.push(productCart);
  //   dispatch({
  //     type: ACTION.ADD_TO_CART,
  //     payload: {
  //       products: updateCart,
  //     },
  //   });
  //   updatePrice(updateCart);
  // };

  // const removeFromCart = (cartProduct) => {
  //   const productCart = {
  //     id: cartProduct.id,
  //     name: cartProduct.name,
  //     price: cartProduct.price,
  //     stock: 1,
  //   };

  //   const updateCart = state.products.map((product) => {});
  //   dispatch({
  //     type: ACTION.DEL_TO_CART,
  //     payload: {
  //       products: updateCart,
  //     },
  //   });
  //   updatePrice(updateCart);
  // };

  // const updatePrice = (products) => {
  //   let total = 0;
  //   console.log("products :", products);
  //   products.map((product) => {
  //     total += product.price;
  //   });

  //   dispatch({
  //     type: ACTION.UPDATE_PRICE,
  //     payload: {
  //       total,
  //     },
  //   });
  // };

  const value = {
    state,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
