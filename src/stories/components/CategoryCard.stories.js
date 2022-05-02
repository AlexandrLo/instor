import React from "react";

import { HStack } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import CategoryCardComponent from "components/CategoryCard";

export default {
  title: "Instor/Components/Category Card",
  component: CategoryCardComponent,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <HStack maxW="23rem">
          <Story />
        </HStack>
      </MemoryRouter>
    ),
  ],
  args: {
    name: "Chairs",
    image: "assets/images/categories/category-chairs.jpg",
    to: "/",
  },
};

export const CategoryCard = (args) => <CategoryCardComponent {...args} />;
