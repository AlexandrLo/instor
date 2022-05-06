import React, { useEffect, useState } from "react";

import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

import ProductCard from "components/ProductCard";
import SectionWrapper from "components/SectionWrapper";
import productsData from "assets/json/products.json";

function Popular() {
  const [popularProductsData, setPopularProductsData] = useState([]);

  const productCount = useBreakpointValue({
    base: 4,
    xs: 4,
    sm: 4,
    md: 6,
    lg: 6,
    xl: 8,
  });

  useEffect(() => {
    setPopularProductsData(
      productsData
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, productCount),
    );
  }, [productCount]);

  return (
    <SectionWrapper
      heading={{
        text: "Popular",
      }}
    >
      <SimpleGrid
        px={{ base: "1rem", md: "1.5rem" }}
        pb={{ base: "1rem", md: "1.5rem" }}
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
        {popularProductsData.map((product) => (
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