import React from "react";

import Banner from "components/Banner";
import CategoryBlock from "components/CategoryBlock";
import Title from "components/Title";

function Category() {
  return (
    <>
      <Title postfix="Category" />

      <CategoryBlock />
      <Banner />
    </>
  );
}

export default Category;
