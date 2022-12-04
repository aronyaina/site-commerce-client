import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import userFetcher from "../fetchers/userFetcher";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    const userData = JSON.stringify({ email, password });

    //==================== CONFIG FOR POSTING USERDATA WITH AXIOS EXTERIOR====================//
    const config = {
      url: "user/login",
      userData,
      header:{
        headers: {
          "Content-Type": "application/json",
          "content-type": "application/json;charset=utf-8",
      }
      }
      ,
      
    };
    //==================== POST USERDATA WITH AXIOS EXTERIOR====================//
    const postUser = async () => {
      return userFetcher.post(config.url, config.userData, config.header);
    };

    postUser()
      .then((response) => {
        const data = response.data;
        setError(null);
        // Saving user to local storage
        localStorage.setItem("user", JSON.stringify(data));

        // Update the auth context
        dispatch({ type: "LOGIN", payload: data });

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.error);
      });
  };

  return { login, isLoading, error };
};
