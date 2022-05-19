import React from "react";

import { Flex, Spinner, useColorModeValue } from "@chakra-ui/react";

function ImageFallback() {
  const bg = useColorModeValue("gray.50", "gray.700");
  return (
    <Flex
      position="relative"
      boxSize="100%"
      bg={bg}
      justify="center"
      align="center"
      borderRadius="1rem"
    >
      <Spinner size="xl" />
    </Flex>
  );
}

export default ImageFallback;
