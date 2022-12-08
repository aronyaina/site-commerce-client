import { useAuthContext } from "./useAuthContext";
import { useProductContext } from "../products/useProductContext";
import { ACTIONAUTH } from "../../reducer/authReducer";
import { ACTIONPRODUCT } from "../../reducer/productReducer";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useProductContext();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("user");

    //   dispatch logout action
    dispatch({
      type: ACTIONAUTH.LOGOUT,
    });
    // dispatch setProduct
    workoutDispatch({
      type: ACTIONPRODUCT.SET_PRODUCT,
      payload: null,
    });
  };
  return {
    logout,
  };
};
