import { useReducer, useEffect } from "react";
import axios from "axios";
import loadingReducer, { ACTIONLOAD } from "../reducer/loadingReducer";
import productReducer, { ACTIONPRODUCT } from "../reducer/productReducer";
import { useProductContext } from "../hooks/products/useProductContext";

const URL = {
  ALL: "/product/",
  //   ONE: `/api/product/:${_id}`,
  //   DELONE: `/api/product/:${_id}`,
  //   UPONE: `/api/product/:${_id}`,
};

export const getAllProducts = (params = {}) => {
  const { products, dispatch } = useProductContext();
  const [{ loading, error, productsLoad }, loadDispatch] = useReducer(
    loadingReducer,
    {
      productsLoads: [],
      loading: true,
      error: "",
    }
  );

  //   GET ALL PRODUCTS
  useEffect(() => {
    axios({
      url: URL.ALL,
      method: "GET",
      headers: { "Content-Type": "application/json" },
      params: params,
    })
      .then((response) => {
        console.log("type de loadDispatch :", typeof dispatch);
        loadDispatch({ type: ACTIONLOAD.FETCH_REQUEST });
        const data = response.data;
        loadDispatch({ type: ACTIONLOAD.FETCH_SUCCESS, payload: data });
        dispatch({ type: ACTIONPRODUCT.SET_PRODUCT, payload: data });
        dispatch({
          type: ACTIONPRODUCT.SET_PRODUCT,
          payload: data,
        });
      })
      .catch((error) => {
        loadDispatch({
          type: ACTIONLOAD.FETCH_FAILURE,
          payload: error.message,
        });
      });
  }, [productsLoad]);
};

// export const getOneProducts = (params = {}) => {
//   return axios({
//     url: URL.ONE,
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     params: params,
//   })
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {});
// };

// export const deleteOneProducts = (params = {}) => {
//   return axios({
//     url: URL.ONE,
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     params: params,
//   })
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {});
// };

// export const udpateOneProducts = (params = {}) => {
//   return axios({
//     url: URL.ONE,
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     params: params,
//   })
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {});
// };
