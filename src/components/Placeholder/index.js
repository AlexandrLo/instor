import React from "react";

import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

function Placeholder({
  size = "md",
  icon,
  heading,
  description,
  showButton = true,
  children,
}) {
  let headingSize = "h2";
  let iconSize = "4rem";

  switch (size) {
    default:
    case "md":
      headingSize = "h2";
      iconSize = ["3rem", "3rem", "4rem"];
      break;
    case "lg":
      headingSize = "h1";
      iconSize = ["4rem", "4rem", "5rem"];
      break;
  }

  return (
    <VStack spacing="1rem">
      {icon && (
        <Box fontSize={iconSize} lineHeight="0">
          {icon}
        </Box>
      )}

      <VStack spacing="0">
        {heading && (
          <Heading as={headingSize} size={headingSize} textAlign="center">
            {heading}
          </Heading>
        )}
        {description && (
          <Text color="gray.400" textAlign="center">
            {description}
          </Text>
        )}
      </VStack>

      {showButton && (
        <Button as={RouterLink} to="/">
          Back to Homepage
        </Button>
      )}

      {children}
    </VStack>
  );
}

Placeholder.propTypes = {
  size: PropTypes.oneOf(["md", "lg"]),
  icon: PropTypes.node,
  heading: PropTypes.string,
  description: PropTypes.string,
  showButton: PropTypes.bool,
  children: PropTypes.node,
};

export default Placeholder;
