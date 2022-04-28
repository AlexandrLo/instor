import React from "react";

import { HStack } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import ProductCardComponent from "components/ProductCard";

export default {
  title: "Instor/Components/Product Card",
  component: ProductCardComponent,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <HStack maxW="17rem">
          <Story />
        </HStack>
      </MemoryRouter>
    ),
  ],
  args: {
    productData: {
      id: 1,
      name: "Landskrona",
      category: "Sofa",
      description: "Test",
      price: 549,
      discount: 499,
      image: "assets/products/product-image-1.jpg",
    },
  },
};

export const ProductCard = (args) => <ProductCardComponent {...args} />;
