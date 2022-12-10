import { useAuthContext } from "./useAuthContext";
import { useProductContext } from "../../stocking/hooks/useProductContext";
import { useCartContext } from "../../shopping/hooks/useCartContext";
import { ACTIONAUTH } from "../reducers/authReducer";
import { ACTIONPRODUCT } from "../../stocking/reducers/productReducer";
import { ACTIONCART } from "../../shopping/reducers/cartReducer";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useProductContext();
  const { state, dispatch: cartDispatch } = useCartContext();

  const logout = () => {
    // remove user from local storage
    localStorage.clear();
    //   dispatch logout action
    dispatch({
      type: ACTIONAUTH.LOGOUT,
    });
    // dispatch setProduct
    workoutDispatch({
      type: ACTIONPRODUCT.SET_PRODUCT,
      payload: null,
    });
    cartDispatch({ type: ACTIONCART.DEL_SHIPPING_ADDRESS_AND_CART });
  };
  return {
    logout,
  };
};
