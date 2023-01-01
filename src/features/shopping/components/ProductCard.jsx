import React, { useEffect, useReducer } from "react";

// COMPONENTS
import LoadingBox from "../../../components/layout/general/LoadingBox";
import { ProductDetails } from "./ProductDetail";
// CONTEXT
import { useProductContext } from "../../stocking/hooks/useProductContext";
import { useAuthContext } from "../../authentication/hooks/useAuthContext";
// REDUCER
import loadingReducer from "../reducers/loadingReducer";
import { ACTIONLOAD } from "../reducers/loadingReducer";
import { ACTIONPRODUCT } from "../../stocking/reducers/productReducer";
import axios from "axios";
import GridComp from "../../../components/layout/general/Grid";

export const ProductCard = () => {
  const { user } = useAuthContext();
  const { oneProduct, products, dispatch } = useProductContext();
  const [{ loading, error }, loadDispatch] = useReducer(loadingReducer, {
    productsLoads: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    let config = "";
    if (!user) {
      config = {
        url: "/api/product",
        header: {
          headers: {
            "Content-Type": "application/json",
            "content-type": "application/json;charset=utf-8",
          },
        },
      };
    } else {
      config = {
        url: "/api/product",
        header: {
          headers: {
            "Content-Type": "application/json",
            "content-type": "application/json;charset=utf-8",
            Authorization: `Bearer ${user.token}`,
          },
        },
      };
    }

    const requestProduct = async function () {
      await axios
        .get(config.url, config.header)
        .then((response) => {
          loadDispatch({ type: ACTIONLOAD.FETCH_REQUEST });
          const data = response.data;
          dispatch({
            type: ACTIONPRODUCT.SET_PRODUCT,
            payload: data,
          });
          loadDispatch({ type: ACTIONLOAD.FETCH_SUCCESS, payload: data });
        })
        .catch((error) => {
          loadDispatch({
            type: ACTIONLOAD.FETCH_FAILURE,
            payload: error.message,
          });
        });
    };
    requestProduct();
  }, [dispatch, oneProduct]);

  return (
    <div>
      {loading ? (
        <div>
          <LoadingBox />
        </div>
      ) : (
        <div className="productCard ">
          <GridComp>
            {products &&
              products.map((product) => (
                <div key={product._id} className="productContainer ">
                  <ProductDetails product={product} />
                </div>
              ))}
          </GridComp>
        </div>
      )}
    </div>
  );
};
