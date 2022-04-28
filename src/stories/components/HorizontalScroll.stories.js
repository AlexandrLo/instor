import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import CategoryCardComponent from "components/CategoryCard";
import CategoryCardStories from "./CategoryCard.stories";
import HorizontalScrollComponent from "components/HorizontalScroll";
import ProductCardComponent from "components/ProductCard";
import ProductCardStories from "./ProductCard.stories";
import RoomCardComponent from "components/RoomCard";
import RoomCardStories from "./RoomCard.stories";

export default {
  title: "Instor/Components/Horizontal Scroll",
  component: HorizontalScrollComponent,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Box pt="5rem">
          <Story />
        </Box>
      </MemoryRouter>
    ),
  ],
  subcomponents: { CategoryCardComponent, ProductCardComponent },
};

export const WithCategoryCards = (args) => (
  <HorizontalScrollComponent {...args}>
    <CategoryCardComponent {...CategoryCardStories.args} />
    <CategoryCardComponent {...CategoryCardStories.args} />
    <CategoryCardComponent {...CategoryCardStories.args} />
  </HorizontalScrollComponent>
);

export const WithRoomCards = (args) => (
  <HorizontalScrollComponent {...args}>
    <RoomCardComponent {...RoomCardStories.args} />
    <RoomCardComponent {...RoomCardStories.args} />
    <RoomCardComponent {...RoomCardStories.args} />
    <RoomCardComponent {...RoomCardStories.args} />
  </HorizontalScrollComponent>
);

export const WithProductCards = (args) => (
  <HorizontalScrollComponent {...args}>
    <ProductCardComponent {...ProductCardStories.args} />
    <ProductCardComponent {...ProductCardStories.args} />
    <ProductCardComponent {...ProductCardStories.args} />
    <ProductCardComponent {...ProductCardStories.args} />
  </HorizontalScrollComponent>
);
