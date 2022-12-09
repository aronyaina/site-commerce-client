export const ACTIONPRODUCT = {
  SET_PRODUCT: "setProduct",
  CREATE_PRODUCT: "createProduct",
  DELETE_PRODUCT: "deleteProduct",
};

const productReducer = (state, action) => {
  switch (action.type) {
    case ACTIONPRODUCT.SET_PRODUCT:
      return {
        products: action.payload,
      };

    case ACTIONPRODUCT.CREATE_PRODUCT:
      return {
        products: [action.payload, ...state.products],
      };
    case ACTIONPRODUCT.DELETE_PRODUCT:
      return {
        products: state.products.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default productReducer;
