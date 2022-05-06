import React, { useEffect, useState } from "react";

import { Box, useBreakpointValue } from "@chakra-ui/react";

import ProductsGrid from "components/ProductsGrid";
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
      <Box
        px={{ base: "1rem", md: "1.5rem" }}
        pb={{ base: "1rem", md: "1.5rem" }}
      >
        <ProductsGrid data={popularProductsData} />
      </Box>
    </SectionWrapper>
  );
}

export default Popular;
