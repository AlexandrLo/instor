import React from "react";

import { ArrowLeftFilled } from "@fluentui/react-icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

function PageHeader({ heading = "Heading", description, image, ...props }) {
  let navigate = useNavigate();
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
          <Button
            variant={image ? "blur" : "alpha"}
            onClick={() => navigate(-1)}
          >
            <ArrowLeftFilled fontSize="24px" />
          </Button>
          <VStack alignItems="start">
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
