import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { ACTIONAUTH } from "../../reducer/authReducer";
import userFetcher from "../../lib/apiFetcher";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const signup = async (name, surname, password, email) => {
    setLoading(true);
    setError(null);
    const userData = JSON.stringify({
      name,
      surname,
      password,
      email,
    });

    //==================== CONFIG FOR POSTING USERDATA WITH AXIOS EXTERIOR====================//
    const config = {
      url: "user/signup",
      userData,
      headers: {
        headers: {
          "Content-Type": "application/json",
          "content-type": "application/json;charset=utf-8",
        },
      },
    };
    //==================== POST USERDATA WITH AXIOS EXTERIOR====================//
    const postUser = async () => {
      return userFetcher.post(config.url, config.userData, config.headers);
    };
    postUser()
      .then((response) => {
        const data = response.data;

        setError(null);
        // Saving user to local storage
        localStorage.setItem("user", JSON.stringify(data));

        // Update the auth context
        dispatch({
          type: ACTIONAUTH.LOGIN,
          payload: data,
        });

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.error);
      });
  };

  return {
    signup,
    isLoading,
    error,
  };
};
