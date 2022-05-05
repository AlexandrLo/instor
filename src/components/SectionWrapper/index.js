import React from "react";

import { ArrowRightFilled } from "@fluentui/react-icons";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

function SectionWrapper({ heading, children }) {
  return (
    <Container>
      {/* Heading */}
      {heading && (
        <VStack spacing="0" align="start" p={{ base: "1rem", md: "1.5rem" }}>
          <HStack
            spacing="2rem"
            justify={{ base: "space-between", md: "start" }}
            align="baseline"
            w="100%"
          >
            {heading.text && (
              <Heading as="h2" size="h2">
                {heading.text}
              </Heading>
            )}
            {heading.to && (
              <Link as={RouterLink} to={heading.to} color="orange.400">
                <HStack spacing="0.25rem">
                  <Text variant="small">See all</Text>
                  <ArrowRightFilled />
                </HStack>
              </Link>
            )}
          </HStack>
          {heading.description && (
            <Text variant="muted">{heading.description}</Text>
          )}
        </VStack>
      )}
      {/* Content */}
      <Box>{children}</Box>
    </Container>
  );
}

SectionWrapper.propTypes = {
  heading: PropTypes.shape({
    text: PropTypes.string,
    description: PropTypes.string,
    to: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default SectionWrapper;
