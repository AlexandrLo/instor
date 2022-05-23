import React from "react";

import PopularSection from "components/PopularSection";
import ProductBlock from "components/ProductBlock";
import Title from "components/Title";

function Product() {
  return (
    <>
      <Title postfix="Product" />

      <ProductBlock />
      <PopularSection />
    </>
  );
}

export default Product;
