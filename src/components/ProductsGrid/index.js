import React from "react";

import { BorderNoneFilled } from "@fluentui/react-icons";
import PropTypes from "prop-types";
import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import ProductCard from "components/ProductCard";

function ProductsGrid({ data = [] }) {
  if (data.length > 0) {
    return (
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
        {data.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </SimpleGrid>
    );
  } else {
    return (
      <VStack w="100%" justify="center" minH="25rem">
        <Box textAlign="center" color="gray.400">
          <BorderNoneFilled fontSize="5rem" />
        </Box>
        <Heading as="h2" size="h2" textAlign="center" color="gray.400">
          Nothing found...
        </Heading>
      </VStack>
    );
  }
}

ProductsGrid.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
      info: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
      price: PropTypes.number.isRequired,
      discount: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ),
};

export default ProductsGrid;
