import React from "react";
import { useState, useEffect } from "react";
import { ProductDetails } from "../../components/admin/productDetail";
import productFetcher from "../../lib/apiFetcher";
import { useProductContext } from "./useProductContext";
import { useAuthContext } from "../authentication/useAuthContext";

export const UseProductDetail = () => {
  //==================== STATE DECLARATION====================//

  const [load, setLoading] = useState(false);
  const { products, dispatch } = useProductContext();
  const { user } = useAuthContext();
  //==================== GET DATA WITH AXIOS INTERIOR====================//

  useEffect(() => {
    console.log(user);
    if (!user) {
      return;
    }
    const config = {
      url: "product",
      header: {
        headers: {
          "Content-Type": "application/json",
          "content-type": "application/json;charset=utf-8",
          Authorization: `Bearer ${user.token}`,
        },
      },
    };

    const getAllProduct = async () => {
      return productFetcher.get(config.url, config.header);
    };

    if (user) {
      getAllProduct()
        .then((response) => {
          const data = response.data;
          dispatch({
            type: "SET_PRODUCT",
            payload: data,
          });
        })
        .catch((error) => {
          console.log("Error fetching product ", error);
        })
        .finally(() => {
          setLoading(true);
        });
    }
  }, [dispatch, user]);

  //==================== RENDERING ====================//
  return (
    <div className="products">
      {" "}
      {load ? (
        products &&
        products.map((product) => (
          <div key={product._id}>
            <ProductDetails product={product} />{" "}
          </div>
        ))
      ) : (
        <div className="loading"> Loading... </div>
      )}{" "}
    </div>
  );
};
