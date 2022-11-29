import React from "react";
import { useState, useEffect } from "react";
import { ProductDetails } from "../components/productDetail";
import productFetcher from "./productFetcher";
export const UseProductDetail = () => {
  const [products, setProduct] = useState(null);
  const [load, setLoading] = useState(false);
  useEffect(() => {
    //==================== GET DATA WITH AXIOS INTERIOR====================//
    // const fetchProduct = async () => {
    //   const response = await fetch(SERVER_URI);
    //   const json = await response.json();
    //   console.log(json);
    //   if (response.ok) {
    //     setProduct(json);
    //   }
    // };
    // fetchProduct();
    //==================== GET DATA WITH AXIOS INTERIOR====================//
    // axios(SERVER_URI)
    //   .then((response) => {
    //     setProduct(response.data);
    //   })
    //   .catch((error) => {
    //     console.log("Error fetching product ", error);
    //   })
    //   .finally(() => {
    //     setLoading(true);
    //   });

    const getAllProduct = async () => {
      return productFetcher.get();
    };

    getAllProduct()
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error fetching product ", error);
      })
      .finally(() => {
        setLoading(true);
      });
  }, []);

  return (
    <div className="products">
      {load ? (
        products &&
        products.product.map((product) => (
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
