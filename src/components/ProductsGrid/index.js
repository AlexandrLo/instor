import React from "react";

import { BorderNoneRegular } from "@fluentui/react-icons";
import PropTypes from "prop-types";
import { Spinner, VStack } from "@chakra-ui/react";

import Placeholder from "components/Placeholder";
import ProductsSimpleGrid from "./ProductsSimpleGrid";

function ProductsGrid({ products = [], isLoading = false }) {
  return (
    <>
      {isLoading && (
        <VStack p="3rem" w="100%">
          <Spinner size="xl" />
        </VStack>
      )}
      {!isLoading && products.length > 0 && (
        <ProductsSimpleGrid products={products} />
      )}
      {!isLoading && products.length <= 0 && (
        <Placeholder
          maxW="19rem"
          icon={<BorderNoneRegular />}
          heading="No Products Found"
          description="Please check spelling or try one of these searches:"
          showButton={false}
          showSuggestions
        />
      )}
    </>
  );
}

ProductsGrid.propTypes = {
  products: ProductsSimpleGrid.propTypes.products,
  isLoading: PropTypes.bool,
};

export default ProductsGrid;
