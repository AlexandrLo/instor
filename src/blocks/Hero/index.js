import React from "react";

import { Container, Flex, Heading } from "@chakra-ui/react";

function Hero() {
  return (
    <Container>
      <Flex
        justifyContent={{ base: "start", md: "center" }}
        textAlign={{ base: "start", md: "center" }}
      >
        <Heading as="h1" size="h1" maxW="450px">
          Explore What Your Home Needs
        </Heading>
      </Flex>
    </Container>
  );
}

export default Hero;
