import React, { useEffect, useReducer } from "react";
import { getAllProducts } from "../../lib/productFetcher";
import { useProductContext } from "../../hooks/products/useProductContext";
import { ProductDetails } from "../admin/productDetail";
import loadingReducer from "../../reducer/loadingReducer";
import LoadingBox from "../layout/loadingBox";

export const ProductCard = () => {
  const { products } = useProductContext();
  const { loading } = useReducer(loadingReducer, {
    loading: true,
  });

  getAllProducts();

  return (
    <div>
      {loading ? (
        <div>
          <LoadingBox />
        </div>
      ) : (
        <div className="productCard">
          {products &&
            products.map((product) => (
              <div key={product._id}>
                <ProductDetails product={product} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
