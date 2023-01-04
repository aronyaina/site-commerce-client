import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { ACTIONAUTH } from "../reducers/authReducer";

import axios from "axios";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();
  

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    const userData = JSON.stringify({
      email,
      password,
    });

    //==================== CONFIG FOR POSTING USERDATA WITH AXIOS EXTERIOR====================//
    const config = {
      url: "/api/user/login",
      userData,
      header: {
        headers: {
          "Content-Type": "application/json",
          "content-type": "application/json;charset=utf-8",
        },
      },
    };
    //==================== POST USERDATA WITH AXIOS EXTERIOR====================//
    const postUser = async () => {
      return axios
        .post(config.url, config.userData, config.header)
        .then((response) => {
          const data = response.data;
          // Update the auth context
          dispatch({
            type: ACTIONAUTH.LOGIN,
            payload: data,
          });

          setError(null);
          // Saving user to local storage
          localStorage.setItem("user", JSON.stringify(data));

          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        
          setError(error.response.data.error);
        });
    };

    postUser();
  };

  return {
    login,
    isLoading,
    error,
  };
};
