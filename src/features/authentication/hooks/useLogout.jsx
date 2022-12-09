import { useAuthContext } from "./useAuthContext";
import { useProductContext } from "../../stocking/hooks/useProductContext";
import { ACTIONAUTH } from "../reducers/authReducer";
import { ACTIONPRODUCT } from "../../stocking/reducers/productReducer";

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
