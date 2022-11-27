import React from "react";
import { useState, useEffect } from "react";
import { ProductDetails } from "../components/productDetail";
export const UseProductDetail = () => {
  const SERVER_URI = "/api/products";
  const [products, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(SERVER_URI);
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setProduct(json);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="products">
      {" "}
      {products &&
        products.product.map((product) => (
          <div key={product._id}>
            <ProductDetails product={product} />
          </div>
        ))}{" "}
    </div>
  );
};
