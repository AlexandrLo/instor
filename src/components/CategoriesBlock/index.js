import React from "react";

import CategoryCard from "components/CategoryCard";
import HeadingBlock from "components/HeadingBlock";
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
    <HeadingBlock
      heading={{ text: "Categories" }}
      contentProps={{ pl: "0", pr: "0" }}
    >
      <ScrollableBlock>
        {categories.map((category) => (
          <CategoryCard
            image={category.image}
            name={category.name}
            to={category.to}
            key={`category-card-${category.name.toLowerCase()}`}
          />
        ))}
      </ScrollableBlock>
    </HeadingBlock>
  );
}

export default CategoriesBlock;
