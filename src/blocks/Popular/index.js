import React from "react";

import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

import ProductCard from "components/ProductCard";
import SectionWrapper from "components/SectionWrapper";

const popularProductsData = [
  {
    id: 1,
    name: "Landskrona",
    category: "Sofa",
    description: "Test",
    price: 549,
    discount: 499,
    image: "assets/products/product-image-1.jpg",
  },
  {
    id: 2,
    name: "Landskrona",
    category: "Sofa",
    description: "Test",
    price: 549,
    discount: 499,
    image: "assets/products/product-image-1.jpg",
  },
  {
    id: 3,
    name: "Landskrona",
    category: "Sofa",
    description: "Test",
    price: 549,
    discount: 499,
    image: "assets/products/product-image-1.jpg",
  },
  {
    id: 4,
    name: "Landskrona",
    category: "Sofa",
    description: "Test",
    price: 549,
    discount: 499,
    image: "assets/products/product-image-1.jpg",
  },
  {
    id: 5,
    name: "Landskrona",
    category: "Sofa",
    description: "Test",
    price: 549,
    discount: 499,
    image: "assets/products/product-image-1.jpg",
  },
  {
    id: 6,
    name: "Landskrona",
    category: "Sofa",
    description: "Test",
    price: 549,
    discount: 499,
    image: "assets/products/product-image-1.jpg",
  },
  {
    id: 7,
    name: "Landskrona",
    category: "Sofa",
    description: "Test",
    price: 549,
    discount: 499,
    image: "assets/products/product-image-1.jpg",
  },
  {
    id: 8,
    name: "Landskrona",
    category: "Sofa",
    description: "Test",
    price: 549,
    discount: 499,
    image: "assets/products/product-image-1.jpg",
  },
];

function Popular() {
  const productCount = useBreakpointValue({
    base: 4,
    xs: 4,
    sm: 4,
    md: 6,
    lg: 6,
    xl: 8,
  });

  return (
    <SectionWrapper
      heading={{
        text: "Popular",
        to: "/popular",
      }}
    >
      <SimpleGrid
        columns={{
          base: 1,
          xs: 2,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
        }}
        spacing="1rem"
        w="100%"
      >
        {popularProductsData.slice(0, productCount).map((product) => (
          <ProductCard
            key={`product-card-${product.id}`}
            productData={product}
          />
        ))}
      </SimpleGrid>
    </SectionWrapper>
  );
}

export default Popular;
