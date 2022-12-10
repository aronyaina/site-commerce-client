export const ACTIONCART = {
  ADD_TO_CART: "add_to_cart",
  SAVE_PAYEMENT_METHOD: "save_payement_method",
  SAVE_SHIPPING_ADDRESS: "save_shipping_address",
  DEL_TO_CART: "delete_to_cart",
  DEL_SHIPPING_ADDRESS_AND_CART: "del_shipping_address_and_cart",
};

export const initialState = {
  shippingAddress: localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {},

  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },

  payementMethod: localStorage.getItem("payementMethod")
    ? JSON.parse(localStorage.getItem("payementMethod"))
    : "",
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONCART.ADD_TO_CART:
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };

    case ACTIONCART.DEL_TO_CART: {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case ACTIONCART.SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload,
        },
      };

    case ACTIONCART.DEL_SHIPPING_ADDRESS_AND_CART: {
      return {
        cart: { cartItems: [], shippingAddress: {} },
      };
    }

    case ACTIONCART.SAVE_PAYEMENT_METHOD: {
      return {
        ...state,
        cart: {
          ...state.cart,
          payementMethod: action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default shopReducer;
