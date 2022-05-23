import React from "react";

import { Container, Flex, Heading } from "@chakra-ui/react";

function Hero() {
  return (
    <Container
      pt={{ base: "2rem", md: "3rem" }}
      pb={{ base: "1rem", md: "1.5rem" }}
      px={{ base: "1rem", md: "1.5rem" }}
    >
      <Flex
        justify={{ base: "start", md: "center" }}
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
