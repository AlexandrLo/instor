import React from "react";

import { ArrowRight } from "@styled-icons/fluentui-system-filled";
import PropTypes from "prop-types";
import { HStack, Heading, Text, VStack } from "@chakra-ui/react";

function BannerOverlay({ heading = "", text = "", showCTA = true }) {
  return (
    <VStack
      align="start"
      position="absolute"
      w="50%"
      left={{ base: "1rem", md: "4rem" }}
      top="50%"
      transform="auto"
      translateY="-50%"
      spacing="0"
      color="black"
    >
      <Heading as="h1" size="h1">
        {heading}
      </Heading>
      <Heading as="h3" size="h3">
        {text}
      </Heading>
      {showCTA && (
        <HStack fontSize={{ base: "14px", md: "16px" }}>
          <Text>Learn more</Text>
          <ArrowRight size={16} />
        </HStack>
      )}
    </VStack>
  );
}

BannerOverlay.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  showCTA: PropTypes.bool,
};

export default BannerOverlay;
