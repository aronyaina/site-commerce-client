export const ACTIONCART = {
  ADD_TO_CART: "add_to_cart",
  DEL_TO_CART: "delete_to_cart",
  UPDATE_PRICE: "update_price",
};

export const initialState = {
  cart: {
    cartItems: [],
  },
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONCART.ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [...state.cart.cartItems, action.payload],
        },
      };
    case ACTIONCART.DEL_TO_CART:
      return { ...state, products: payload.products };
    case ACTIONCART.UPDATE_PRICE:
      return { ...state, products: payload.total };
    default:
      return state;
  }
};

export default shopReducer;
