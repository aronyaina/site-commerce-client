import { useAuthContext } from "./useAuthContext";
import { useProductContext } from "../products/useProductContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useProductContext();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("user");

    //   dispatch logout action
    dispatch({
      type: "LOGOUT",
    });
    // dispatch setProduct
    workoutDispatch({
      type: "SET_PRODUCT",
      payload: null,
    });
  };
  return {
    logout,
  };
};
