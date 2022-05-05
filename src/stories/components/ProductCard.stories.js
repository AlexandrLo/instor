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
      id: 220101,
      name: "karljan",
      category: { id: 2, name: "chair" },
      price: 39,
      images: ["assets/images/products/product-220101.jpg"],
    },
  },
};

export const ProductCard = (args) => <ProductCardComponent {...args} />;
