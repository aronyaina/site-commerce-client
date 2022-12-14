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
    console.log("user in context: ", user);
    console.log(userStore);
    // const userId = JSON.parse(localStorage.getItem("user").id);
    if (userStore) {
      console.log("Auth Context state :", state);
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
