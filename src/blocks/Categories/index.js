import React from "react";

import { HStack } from "@chakra-ui/react";

import CategoryCard from "components/CategoryCard";
import DragScroll from "components/DragScroll";
import SectionWrapper from "components/SectionWrapper";
import categoriesData from "assets/json/categories.json";

function Categories() {
  return (
    <SectionWrapper heading={{ text: "Categories" }}>
      <DragScroll>
        <HStack
          w="fit-content"
          spacing="1rem"
          px={{ base: "1rem", md: "1.5rem" }}
          pb={{ base: "1rem", md: "1.5rem" }}
        >
          {categoriesData.map((category) => (
            <CategoryCard
              image={category.image}
              name={category.name}
              to={`category?id=${category.id}`}
              key={category.id}
            />
          ))}
        </HStack>
      </DragScroll>
    </SectionWrapper>
  );
}

export default Categories;
