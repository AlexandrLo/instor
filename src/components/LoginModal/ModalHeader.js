import React from "react";

import PropTypes from "prop-types";
import { Box, HStack, Heading, useColorModeValue } from "@chakra-ui/react";

import BackButton from "components/BackButton";

function ModalHeader({ heading = "heading", onBack }) {
  const headerBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Box bg={headerBg} m="1rem" p="1.5rem" borderRadius="1rem">
      <HStack spacing="0.75rem">
        <BackButton variant="alpha" onBack={onBack} />
        <Heading as="h2" size="h2" textTransform="capitalize">
          {heading}
        </Heading>
      </HStack>
    </Box>
  );
}

ModalHeader.propTypes = {
  heading: PropTypes.string,
  onBack: PropTypes.func,
};

export default ModalHeader;
