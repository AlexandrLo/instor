import React, { useEffect, useState } from "react";

import { Box, useBreakpointValue } from "@chakra-ui/react";

import ProductsGrid from "components/ProductsGrid";
import SectionWrapper from "components/SectionWrapper";
import productsData from "assets/json/products.json";

function PopularSection() {
  const [popularProductsData, setPopularProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      [...productsData]
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, productCount),
    );
    setIsLoading(false);
  }, [productCount]);

  return (
    <SectionWrapper
      heading={{
        text: "Popular",
      }}
    >
      <Box p={{ base: "1rem", md: "1.5rem" }}>
        <ProductsGrid products={popularProductsData} isLoading={isLoading} />
      </Box>
    </SectionWrapper>
  );
}

export default PopularSection;
