import React from "react";

import { Skeleton, useColorModeValue } from "@chakra-ui/react";

function ImageFallback() {
  const start = useColorModeValue("gray.100", "gray.600");
  const end = useColorModeValue("gray.200", "gray.500");
  return (
    <Skeleton
      boxSize="100%"
      borderRadius="1rem"
      startColor={start}
      endColor={end}
    />
  );
}

export default ImageFallback;
