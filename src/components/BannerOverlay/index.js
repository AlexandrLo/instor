import React from "react";

import { ArrowRightFilled } from "@fluentui/react-icons";
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
      <Text fontWeight="600" fontSize={{ base: "14px", md: "16px" }}>
        {text}
      </Text>
      {showCTA && (
        <HStack fontSize={{ base: "14px", md: "16px" }}>
          <Text>Learn more</Text>
          <ArrowRightFilled />
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
