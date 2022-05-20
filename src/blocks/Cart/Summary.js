import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { Button, HStack, Heading, Input, Text, VStack } from "@chakra-ui/react";

function Summary({ items }) {
  const [productsTotal, setProductsTotal] = useState(0);
  const [deliveryTotal, setDeliveryTotal] = useState(0);

  useEffect(() => {
    setProductsTotal(
      items.reduce(
        (sum, item) =>
          (sum +=
            item.amount *
            (item.product.discount
              ? item.product.discount
              : item.product.price)),
        0,
      ),
    );
    setDeliveryTotal(items.length > 0 ? 15 : 0);
  }, [items]);

  return (
    <VStack
      position="sticky"
      top="7rem"
      align="stretch"
      flex="0 0 auto"
      w={{ base: "100%", md: "35%" }}
      spacing="1rem"
    >
      <Heading as="h2" size="h2">
        Summary
      </Heading>

      <HStack spacing="0.5rem" justify="space-between">
        <Text variant="muted">Products</Text>
        <Text variant="muted">${productsTotal}</Text>
      </HStack>

      <HStack spacing="0.5rem" justify="space-between">
        <Text variant="muted">Delivery</Text>
        <Text variant="muted">${deliveryTotal}</Text>
      </HStack>

      <HStack spacing="0.5rem" justify="space-between">
        <Text>Total</Text>
        <Text variant="bold">${productsTotal + deliveryTotal}</Text>
      </HStack>

      <HStack spacing="0.5rem">
        <Input placeholder="Coupon code" />
        <Button variant="solid">Apply</Button>
      </HStack>

      <Button colorScheme="orange" disabled={items.length === 0}>
        Checkout
      </Button>
    </VStack>
  );
}

Summary.propTypes = {
  items: PropTypes.array,
};

export default Summary;
