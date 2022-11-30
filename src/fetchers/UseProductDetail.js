import React from "react";
import { useState, useEffect } from "react";
import { ProductDetails } from "../components/productDetail";
import productFetcher from "./productFetcher";
import { useProductContext } from "../hooks/useProductContext";
export const UseProductDetail = () => {
  //==================== STATE DECLARATION====================//

  const [load, setLoading] = useState(false);
  const { products, dispatch } = useProductContext();
  //==================== GET DATA WITH AXIOS INTERIOR====================//
  useEffect(() => {
    const getAllProduct = async () => {
      return productFetcher.get();
    };

    getAllProduct()
      .then((response) => {
        const data = response.data;
        dispatch({ type: "SET_PRODUCT", payload: data });
        console.log(products);
      })
      .catch((error) => {
        console.log("Error fetching product ", error);
      })
      .finally(() => {
        setLoading(true);
      });
  }, [dispatch]);

  //==================== RENDERING ====================//
  return (
    <div className="products">
      {load ? (
        products &&
        products.map((product) => (
          <div key={product._id}>
            <ProductDetails product={product} />
          </div>
        ))
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};
