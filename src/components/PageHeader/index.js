import React from "react";

import PropTypes from "prop-types";
import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import BackButton from "components/BackButton";

function PageHeader({ heading = "", description, image, onBack }) {
  const headerBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Box
      w="100%"
      bg={headerBg}
      p={{ base: "1.5rem", sm: "3rem" }}
      borderRadius="1rem"
      {...(image && {
        backgroundImage: image,
        backgroundSize: "cover",
        backgroundPosition: "center",
      })}
    >
      <HStack spacing={{ base: "0.75rem", md: "1.5rem" }}>
        <BackButton variant={image ? "blur" : "alpha"} onBack={onBack} />
        <VStack align="start">
          <Heading
            as="h1"
            size="h1"
            color={image && "white"}
            textTransform="capitalize"
          >
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
  );
}

PageHeader.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  onBack: PropTypes.func,
};

export default PageHeader;
