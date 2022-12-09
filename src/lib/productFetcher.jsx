import { useReducer, useEffect } from "react";
import axios from "axios";
import loadingReducer, {
  ACTIONLOAD,
} from "../features/projects/reducers/loadingReducer";
import productReducer, {
  ACTIONPRODUCT,
} from "../features/stocking/reducers/productReducer";
import { useProductContext } from "../features/stocking/hooks/useProductContext";
import { useAuthContext } from "../features/authentication/hooks/useAuthContext";

const URL = {
  ALL: "/product/",
};

export const getAllProducts = (params = {}) => {
  const { products, dispatch } = useProductContext();
  const { user } = useAuthContext();
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
    let config = {};
    if (!user) {
      config = {
        url: "product",
        header: {
          headers: {
            "Content-Type": "application/json",
            "content-type": "application/json;charset=utf-8",
          },
        },
      };
    } else {
      config = {
        url: "product",
        header: {
          headers: {
            "Content-Type": "application/json",
            "content-type": "application/json;charset=utf-8",
            Authorization: `Bearer ${user.token}`,
          },
        },
      };
    }

    axios(config)
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
  }, [user, productsLoad, dispatch, loading, error]);
};

// export const getOneProducts = (params = {}) => {
//   const { products, dispatch } = useProductContext();
//   const [{ loading, error, productsLoad }, loadDispatch] = useReducer(
//     loadingReducer,
//     {
//       productsLoads: [],
//       loading: true,
//       error: "",
//     }
//   );
//   useEffect(() => {
//     axios({
//       url: `/product/:${products._id}`,
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//       params: params,
//     })
//       .then((response) => {
//         console.log("type de loadDispatch :", typeof dispatch);
//         loadDispatch({ type: ACTIONLOAD.FETCH_REQUEST });
//         const data = response.data;
//         loadDispatch({ type: ACTIONLOAD.FETCH_SUCCESS, payload: data });
//         dispatch({ type: ACTIONPRODUCT.SET_PRODUCT, payload: data });
//         dispatch({
//           type: ACTIONPRODUCT.SET_PRODUCT,
//           payload: data,
//         });
//       })
//       .catch((error) => {
//         loadDispatch({
//           type: ACTIONLOAD.FETCH_FAILURE,
//           payload: error.message,
//         });
//       });
//   }, [productsLoad]);
// };

// export const postOneProducts = (params = {}) => {

//   const { products, dispatch } = useProductContext();
//   const [{ loading, error, productsLoad }, loadDispatch] = useReducer(
//     loadingReducer,
//     {
//       productsLoads: [],
//       loading: true,
//       error: "",
//     }
//   );

//     axios({
//       url: `/product/`,
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       params: params,
//     })
//       .then((response) => {
//         console.log("type de loadDispatch :", typeof dispatch);
//         loadDispatch({ type: ACTIONLOAD.FETCH_REQUEST });
//         const data = response.data;
//         loadDispatch({ type: ACTIONLOAD.FETCH_SUCCESS, payload: data });
//         dispatch({ type: ACTIONPRODUCT.SET_PRODUCT, payload: data });
//         dispatch({
//           type: ACTIONPRODUCT.SET_PRODUCT,
//           payload: data,
//         });
//       })
//       .catch((error) => {
//         loadDispatch({
//           type: ACTIONLOAD.FETCH_FAILURE,
//           payload: error.message,
//         });
//       });
//   }, [productsLoad]);
// };

// export const deleteOneProducts = (params = {}) => {
//   const { products, dispatch } = useProductContext();
//   const [{ loading, error, productsLoad }, loadDispatch] = useReducer(
//     loadingReducer,
//     {
//       productsLoads: [],
//       loading: true,
//       error: "",
//     }
//   );

//   useEffect(() => {
//     axios({
//       url: `/product/:${products._id}`,
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       params: params,
//     })
//       .then((response) => {
//         console.log("type de loadDispatch :", typeof dispatch);
//         loadDispatch({ type: ACTIONLOAD.FETCH_REQUEST });
//         const data = response.data;
//         loadDispatch({ type: ACTIONLOAD.FETCH_SUCCESS, payload: data });
//         dispatch({ type: ACTIONPRODUCT.SET_PRODUCT, payload: data });
//         dispatch({
//           type: ACTIONPRODUCT.SET_PRODUCT,
//           payload: data,
//         });
//       })
//       .catch((error) => {
//         loadDispatch({
//           type: ACTIONLOAD.FETCH_FAILURE,
//           payload: error.message,
//         });
//       });
//   }, [productsLoad]);
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
