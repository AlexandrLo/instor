import React from "react";

import CategoryCard from "components/CategoryCard";
import ScrollableBlock from "components/ScrollableBlock";

const categories = [
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

function CategoriesBlock() {
  return (
    <ScrollableBlock heading="Categories">
      {categories.map((category) => (
        <CategoryCard
          image={category.image}
          name={category.name}
          to={category.to}
          key={`category-card-${category.name.toLowerCase()}`}
        />
      ))}
    </ScrollableBlock>
  );
}

export default CategoriesBlock;
