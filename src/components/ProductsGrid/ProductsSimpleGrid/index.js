import React from "react";

import PropTypes from "prop-types";
import { SimpleGrid } from "@chakra-ui/react";

import ProductCard from "./ProductCard";

function ProductsSimpleGrid({ products }) {
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
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}
ProductsSimpleGrid.propTypes = {
  products: PropTypes.arrayOf(ProductCard.propTypes.product).isRequired,
};

export default ProductsSimpleGrid;
