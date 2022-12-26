import { createContext, useReducer, useEffect } from "react";
import { authReducer, initialState } from "../reducers/authReducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const user = initialState.localUser;

  const [state, dispatch] = useReducer(authReducer, {
    user,
  });

  useEffect(() => {
    const userStore = JSON.parse(localStorage.getItem("user"));
    // const userId = JSON.parse(localStorage.getItem("user").id);
    if (userStore) {
      dispatch({
        type: "LOGIN",
        payload: userStore,
      });
    }
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};
