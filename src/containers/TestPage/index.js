import React from "react";

import { Container, Flex, Heading } from "@chakra-ui/react";

import Banner from "components/Banner";
import CategoriesBlock from "components/CategoriesBlock";
import ComponentTestBlock from "components/ComponentTestBlock";
import HeadingBlock from "components/HeadingBlock";
import NavBar from "components/NavBar";
import PopularBlock from "components/PopularBlock";
import RoomsBlock from "components/RoomsBlock";
import SlidingBanner from "components/SlidingBanner";

function TestPage() {
  return (
    <>
      <ComponentTestBlock />

      <Container>
        <Heading as="h1" size="h1">
          Blocks
        </Heading>
      </Container>
      <SlidingBanner />

      <Banner />

      <HeadingBlock
        heading={{
          text: "Heading block",
          description: "This is test heading block",
          to: "/test",
        }}
      >
        <Flex
          w="100%"
          h="200px"
          bg="gray.400"
          justifyContent="center"
          alignItems="center"
        >
          Placeholder content
        </Flex>
      </HeadingBlock>

      <CategoriesBlock />

      <RoomsBlock />

      <PopularBlock />
    </>
  );
}

export default TestPage;
