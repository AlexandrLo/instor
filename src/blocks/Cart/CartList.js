import React from "react";

import { CartRegular } from "@fluentui/react-icons";
import PropTypes from "prop-types";
import { Box, VStack } from "@chakra-ui/react";

import CartItem from "./CartItem";
import Placeholder from "components/Placeholder";

function CartList({ items }) {
  return (
    <VStack spacing="1rem" align="stretch" flex="1 0 0%" w="100%" maxW="100%">
      {items.length > 0 ? (
        items.map((item) => <CartItem key={item.product.id} item={item} />)
      ) : (
        <Box maxW="18rem">
          <Placeholder
            icon={<CartRegular />}
            heading="Cart is Empty"
            description="Looks like you haven’t added anything to your cart yet"
          />
        </Box>
      )}
    </VStack>
  );
}

CartList.propTypes = {
  items: PropTypes.arrayOf(CartItem.propTypes.item),
};

export default CartList;
