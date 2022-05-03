import React from "react";

import { Box, Container, Flex, Heading } from "@chakra-ui/react";

function Hero() {
  return (
    <Box>
      <Container pt={{ base: "2rem", md: "3rem" }}>
        <Flex
          justifyContent={{ base: "start", md: "center" }}
          textAlign={{ base: "start", md: "center" }}
        >
          <Heading as="h1" size="h1" maxW="450px">
            Explore What Your Home Needs
          </Heading>
        </Flex>
      </Container>
    </Box>
  );
}

export default Hero;
