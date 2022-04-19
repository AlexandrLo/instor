import React from "react";

import { ArrowRightFilled } from "@fluentui/react-icons";
import PropTypes from "prop-types";
import { HStack, Heading, Text, VStack } from "@chakra-ui/react";

function Overlay({ heading = "", lead = "", ...props }) {
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
        {lead}
      </Text>
      <HStack fontSize={{ base: "14px", md: "16px" }}>
        <Text>Learn more</Text>
        <ArrowRightFilled />
      </HStack>
    </VStack>
  );
}

Overlay.propTypes = {
  heading: PropTypes.string,
  lead: PropTypes.string,
};

export default Overlay;
