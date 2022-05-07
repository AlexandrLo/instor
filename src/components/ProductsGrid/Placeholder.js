import React from "react";

import { BorderNoneFilled } from "@fluentui/react-icons";
import { Box, Heading, VStack } from "@chakra-ui/react";

function Placeholder() {
  return (
    <VStack w="100%" justify="center" minH="25rem">
      <Box textAlign="center">
        <BorderNoneFilled fontSize="5rem" />
      </Box>
      <Heading
        as="h2"
        size="h2"
        textAlign="center"
        maxW={["13rem", "14rem", "15rem", "16rem"]}
      >
        Nothing Found...
      </Heading>
    </VStack>
  );
}

export default Placeholder;
