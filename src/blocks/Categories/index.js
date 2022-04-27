import React from "react";

import CategoryCard from "components/CategoryCard";
import HorizontalScroll from "components/HorizontalScroll";
import SectionWrapper from "components/SectionWrapper";

const categoriesData = [
  {
    name: "Chairs",
    image: "assets/categories/category-chairs.jpg",
    to: "/category/chairs",
  },
  {
    name: "Sofas",
    image: "assets/categories/category-sofas.jpg",
    to: "/category/sofas",
  },
  {
    name: "Desks",
    image: "assets/categories/category-desks.jpg",
    to: "/category/desks",
  },
];

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
            to={category.to}
            key={`category-card-${category.name.toLowerCase()}`}
          />
        ))}
      </HorizontalScroll>
    </SectionWrapper>
  );
}

export default Categories;
