import React from "react";

import { ErrorCircleFilled } from "@fluentui/react-icons";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";

function NoMatchPage() {
  return (
    <VStack flex="1 0 100%" justify="center">
      <Container h="100%">
        <Box textAlign="center" color="orange.400">
          <ErrorCircleFilled fontSize="5rem" />
        </Box>
        <Heading as="h1" size="h1" textAlign="center">
          Page not found
        </Heading>
        <HStack justify="center" pt="1rem">
          <Button as={RouterLink} to="/" colorScheme="orange">
            Back to Homepage
          </Button>
        </HStack>
      </Container>
    </VStack>
  );
}

export default NoMatchPage;
