// React
import React from "react";
// Personnal components
import { ProductCard } from "../../features/shopping/components/ProductCard";
import HeaderComponent from "../../components/layout/general/HeaderTitle";
export const Shopping = () => {
  return (
    <div>
      <HeaderComponent title={"Nos produits disponibles"} />
      <ProductCard />
    </div>
  );
};
