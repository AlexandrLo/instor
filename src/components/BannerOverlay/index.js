import React from "react";

import { ArrowRightFilled } from "@fluentui/react-icons";
import PropTypes from "prop-types";
import { HStack, Heading, Text, VStack } from "@chakra-ui/react";

function BannerOverlay({ heading = "", text = "", showCTA = true, ...props }) {
  return (
    <VStack
      position="absolute"
      top="50%"
      left={{ base: "1rem", md: "4rem" }}
      transform="auto"
      translateY="-50%"
      alignItems="start"
      spacing="0"
      w="50%"
      color="black"
      {...props}
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
