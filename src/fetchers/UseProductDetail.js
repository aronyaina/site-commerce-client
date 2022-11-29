import React from "react";
import { useState, useEffect } from "react";
import { ProductDetails } from "../components/productDetail";
import productFetcher from "./productFetcher";
export const UseProductDetail = () => {
  //==================== STATE DECLARATION====================//
  const [products, setProduct] = useState(null);
  const [load, setLoading] = useState(false);

  //==================== GET DATA WITH AXIOS INTERIOR====================//
  useEffect(() => {
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

  //==================== RENDERING ====================//
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
