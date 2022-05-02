import React from "react";

import CategoryCard from "components/CategoryCard";
import HorizontalScroll from "components/HorizontalScroll";
import SectionWrapper from "components/SectionWrapper";
import categoriesData from "assets/json/categories.json";

function Categories() {
  return (
    <SectionWrapper
      heading={{ text: "Categories" }}
      contentProps={{ pl: "0", pr: "0" }}
    >
      <HorizontalScroll>
        {categoriesData.map((category) => (
          <CategoryCard
            image={category.image}
            name={category.name}
            to={`category?id=${category.id}`}
            key={category.id}
          />
        ))}
      </HorizontalScroll>
    </SectionWrapper>
  );
}

export default Categories;
