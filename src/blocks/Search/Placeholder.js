import React from "react";

import { Link } from "react-router-dom";
import { SearchFilled } from "@fluentui/react-icons";
import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const examples = [
  { name: "Sofa", to: "/search?query=Sofa" },
  { name: "Chair", to: "/search?query=Chair" },
  { name: "Table", to: "/search?query=Table" },
];

function Placeholder() {
  return (
    <VStack w="100%" justify="center" minH="25rem">
      <Box textAlign="center">
        <SearchFilled fontSize="5rem" />
      </Box>
      <Heading
        as="h2"
        size="h2"
        textAlign="center"
        maxW={["13rem", "14rem", "15rem", "16rem"]}
      >
        Find Best Furniture For Your House
      </Heading>
      <Text as="h3" size="h3" textAlign="center" color="gray.400">
        For example:
      </Text>
      <HStack>
        {examples.map((example) => (
          <Button
            key={example.name}
            as={Link}
            to={example.to}
            size="sm"
            px="1rem"
            borderRadius="full"
          >
            {example.name}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
}

export default Placeholder;
