import React from "react";

import { ArrowLeftFilled } from "@fluentui/react-icons";
import { Button, Container, Heading, HStack, VStack } from "@chakra-ui/react";

function TestPage() {
  return (
    <Container>
      <VStack align="start">
        <Heading>Buttons</Heading>
        {/* Blur buttons */}
        <HStack>
          <Button
            size="md"
            variant="blur"
            leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
          >
            Back
          </Button>
          <Button
            size="sm"
            variant="blur"
            leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
          >
            Back
          </Button>
        </HStack>
        {/* Primary buttons */}
        <HStack>
          <Button
            size="md"
            variant="primary"
            leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
          >
            Back
          </Button>
          <Button
            size="sm"
            variant="primary"
            leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
          >
            Back
          </Button>
        </HStack>
        {/* Secondary buttons */}
        <HStack>
          <Button
            size="md"
            variant="secondary"
            leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
          >
            Back
          </Button>
          <Button
            size="sm"
            variant="secondary"
            leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
          >
            Back
          </Button>
        </HStack>
        {/* Brand buttons */}
        <HStack>
          <Button
            size="md"
            variant="brand"
            leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
          >
            Back
          </Button>
          <Button
            size="sm"
            variant="brand"
            leftIcon={<ArrowLeftFilled fontSize="1.5rem" />}
          >
            Back
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}

export default TestPage;
