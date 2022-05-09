import React from "react";

import PropTypes from "prop-types";
import { Button, HStack, Heading, Input, Text, VStack } from "@chakra-ui/react";

function Summary({ productsTotal = 0, deliveryPrice = 0 }) {
  return (
    <VStack
      position="sticky"
      top="7rem"
      align="stretch"
      w="100%"
      maxW={{ base: "none", md: "15rem", lg: "22rem" }}
      spacing="1rem"
    >
      <Heading as="h2" size="h2">
        Summary
      </Heading>
      <HStack spacing="0.5rem" justify="space-between">
        <Text variant="muted">Products</Text>
        <Text variant="muted">${productsTotal}</Text>
      </HStack>
      {deliveryPrice && (
        <HStack spacing="0.5rem" justify="space-between">
          <Text variant="muted">Delivery</Text>
          <Text variant="muted">${deliveryPrice}</Text>
        </HStack>
      )}
      <HStack spacing="0.5rem" justify="space-between">
        <Text>Total</Text>
        <Text variant="bold">${productsTotal + deliveryPrice}</Text>
      </HStack>

      <HStack spacing="0.5rem">
        <Input placeholder="Coupon code" />
        <Button variant="solid">Apply</Button>
      </HStack>
      <Button colorScheme="orange">Checkout</Button>
    </VStack>
  );
}

Summary.propTypes = {
  productsTotal: PropTypes.number,
  deliveryPrice: PropTypes.number,
};

export default Summary;
