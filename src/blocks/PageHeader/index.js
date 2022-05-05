import React from "react";

import PropTypes from "prop-types";
import {
  Box,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

function PageHeader({ heading = "Heading", description, image, ...props }) {
import BackButton from "components/BackButton";

  const headerBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Container>
      <Box
        bg={headerBg}
        p="3rem"
        borderRadius="1rem"
        {...(image && {
          backgroundImage: image,
          backgroundSize: "cover",
          backgroundPosition: "center",
        })}
        {...props}
      >
        <HStack spacing={{ base: "0.75rem", md: "1.5rem" }}>
          <VStack alignItems="start">
          <BackButton variant={image ? "blur" : "alpha"} />
            <Heading as="h1" size="h1" color={image && "white"}>
              {heading}
            </Heading>
            {description && (
              <Text variant="muted" color={image && "white"}>
                {description}
              </Text>
            )}
          </VStack>
        </HStack>
      </Box>
    </Container>
  );
}

PageHeader.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default PageHeader;
