import { useAuthContext } from "./useAuthContext";
import { UseProductDetail } from "./useProductDetail";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = UseProductDetail();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("user");
    //   dispatch logout action
    dispatch({
      type: "LOGOUT",
    });

    workoutDispatch({ type: "SET_PRODUCT", payload: null });
  };
  return {
    logout,
  };
};
