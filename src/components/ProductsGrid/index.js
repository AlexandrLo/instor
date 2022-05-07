import React from "react";

import PropTypes from "prop-types";
import { SimpleGrid } from "@chakra-ui/react";

import Placeholder from "./Placeholder";
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
    return <Placeholder />;
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
