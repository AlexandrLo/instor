import React from "react";

import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import Suggestions from "./Suggestions";

function Placeholder({
  size = "md",
  icon,
  heading,
  description,
  showButton = true,
  showSuggestions = false,
  maxW,
  children,
}) {
  const iconSizeMd = useBreakpointValue(["3rem", "3rem", "4rem"]);
  const iconSizeLg = useBreakpointValue(["4rem", "4rem", "5rem"]);

  let headingSize = "h2";
  let iconSize = "4rem";

  switch (size) {
    default:
    case "md":
      headingSize = "h2";
      iconSize = iconSizeMd;
      break;
    case "lg":
      headingSize = "h1";
      iconSize = iconSizeLg;
      break;
  }

  return (
    <VStack spacing="1rem" maxW={maxW}>
      {icon && React.cloneElement(icon, { size: iconSize })}

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

      {showSuggestions && <Suggestions />}

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
  showSuggestions: PropTypes.bool,
  maxW: PropTypes.any,
  children: PropTypes.node,
};

export default Placeholder;
