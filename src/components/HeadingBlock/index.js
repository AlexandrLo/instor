import React from "react";

import { ArrowRightFilled } from "@fluentui/react-icons";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

function HeadingBlock({
  heading,
  contentProps = {},
  headingProps = {},
  children,
}) {
  return (
    <Box>
      {/* Heading */}
      {heading && (
        <Container pb="0" {...headingProps}>
          <VStack spacing="0" alignItems="start">
            <HStack
              spacing="2rem"
              justifyContent={{ base: "space-between", md: "start" }}
              alignItems="baseline"
              w="100%"
            >
              {heading.text && (
                <Heading as="h2" size="h2">
                  {heading.text}
                </Heading>
              )}
              {heading.to && (
                <Link as={NavLink} to={heading.to} color="orange.400">
                  <HStack spacing="0.25rem">
                    <Text variant="small">See all</Text>
                    <ArrowRightFilled fontSize="0.875rem" />
                  </HStack>
                </Link>
              )}
            </HStack>
            {heading.description && (
              <Text variant="muted">{heading.description}</Text>
            )}
          </VStack>
        </Container>
      )}
      {/* Content */}
      <Container {...contentProps}>{children}</Container>
    </Box>
  );
}

HeadingBlock.propTypes = {
  heading: PropTypes.shape({
    text: PropTypes.string,
    description: PropTypes.string,
    to: PropTypes.string,
  }),
  contentProps: PropTypes.object,
  headingProps: PropTypes.object,
  children: PropTypes.node,
};

export default HeadingBlock;
