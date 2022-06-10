import React from "react";

import { Flex } from "@chakra-ui/react";

import CategoryCard from "./CategoryCard";
import DragScroll from "components/DragScroll";
import SectionWrapper from "components/SectionWrapper";
import categoriesData from "assets/json/categories.json";

function CategoriesSection() {
  return (
    <SectionWrapper heading={{ text: "Categories" }}>
      <DragScroll>
        <Flex
          w="100%"
          pl={{ base: "1rem", md: "1.5rem" }}
          py={{ base: "1rem", md: "1.5rem" }}
        >
          {categoriesData.map((category) => (
            <CategoryCard
              image={category.image}
              name={category.name}
              to={`/category/${category.id}`}
              key={category.id}
            />
          ))}
        </Flex>
      </DragScroll>
    </SectionWrapper>
  );
}

export default CategoriesSection;
