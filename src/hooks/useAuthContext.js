import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useProductContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an useAuthContextProvider");
  }

  return context;
};
