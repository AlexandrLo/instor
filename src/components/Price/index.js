import React from "react";

import PropTypes from "prop-types";
import { HStack, Heading, Text } from "@chakra-ui/react";

function Price({ price, discount, size = "md" }) {
  if (size === "lg") {
    return (
      <HStack spacing="0.5rem">
        {discount ? (
          <>
            <Heading
              size="h2"
              fontWeight="400"
              textDecoration="line-through"
              color="gray.400"
            >
              ${price}
            </Heading>
            <Heading size="h2" color="red.400">
              ${discount}
            </Heading>
          </>
        ) : (
          <Heading size="h2">${price}</Heading>
        )}
      </HStack>
    );
  }

  return (
    <HStack spacing="0.25rem">
      {discount ? (
        <>
          <Text fontWeight="400" textDecoration="line-through" color="gray.400">
            ${price}
          </Text>
          <Text fontWeight="600" color="red.400">
            ${discount}
          </Text>
        </>
      ) : (
        <Text fontWeight="600">${price}</Text>
      )}
    </HStack>
  );
}

Price.propTypes = {
  price: PropTypes.number,
  discount: PropTypes.number,
  size: PropTypes.oneOf(["md", "lg"]),
};

export default Price;
