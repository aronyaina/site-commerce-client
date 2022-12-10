import { createContext, useReducer, useEffect } from "react";
import { authReducer, initialState } from "../reducers/authReducer";

export const AuthContext = createContext();
const user = initialState.localUser;
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user,
  });

  useEffect(() => {
    const userStore = JSON.parse(localStorage.getItem("user"));
    console.log(userStore);
    // const userId = JSON.parse(localStorage.getItem("user").id);
    if (userStore) {
      console.log("AuthContext state :", state);
      dispatch({
        type: "LOGIN",
        payload: userStore,
      });
    }
  }, [user]);

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
