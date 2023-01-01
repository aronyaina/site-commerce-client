export const ACTIONPRODUCT = {
  SET_PRODUCT: "setProduct",
  CREATE_PRODUCT: "createProduct",
  DELETE_PRODUCT: "deleteProduct",
  SET_ONE_PRODUCT: "setOneProduct",
  DEL_ONE_PRODUCT: "deleteOneProduct",
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
    case ACTIONPRODUCT.SET_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload,
      };
    case ACTIONPRODUCT.DEL_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: null,
      };

    default:
      return state;
  }
};

export default productReducer;
