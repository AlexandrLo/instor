import React from "react";

import { ArrowLeftFilled } from "@fluentui/react-icons";
import {
  Button,
  Checkbox,
  Container,
  HStack,
  Heading,
  Input,
  Switch,
  VStack,
} from "@chakra-ui/react";

import ColorModeSwitch from "components/ColorModeSwitch";
import NumberInput from "components/NumberInput";

function ComponentTestBlock() {
  return (
    <Container maxW="container.xl" p="1rem">
      <VStack align="start" spacing="1.5rem">
        <Heading as="h1" size="h1">
          Components
        </Heading>

        {/* Buttons */}
        <VStack align="start" spacing="0.5rem">
          <Heading as="h2" size="h2">
            Button
          </Heading>
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

        {/* Inputs */}
        <VStack align="start" spacing="1rem">
          <Heading as="h2" size="h2">
            Input
          </Heading>
          {/* Default input */}
          <Input placeholder="Search" size="md" variant="brand" />
          <Input placeholder="Search" size="sm" variant="brand" />
          {/* Number input with buttons */}
          <HStack>
            <NumberInput maxW="54px" size="md" />
            <NumberInput maxW="38px" size="sm" />
          </HStack>
        </VStack>

        {/* Checkbox */}
        <VStack align="start" spacing="1rem">
          <Heading as="h2" size="h2">
            Checkbox
          </Heading>
          <Checkbox defaultChecked>Remember me</Checkbox>
          <Checkbox>Remember me</Checkbox>
          <Checkbox disabled defaultChecked>
            Remember me
          </Checkbox>
          <Checkbox disabled>Remember me</Checkbox>
        </VStack>

        {/* Switch */}
        <VStack align="start" spacing="1rem">
          <Heading as="h2" size="h2">
            Switch
          </Heading>
          <Switch />
        </VStack>

        {/* Color mode switch */}
        <VStack align="start" spacing="1rem">
          <Heading as="h2" size="h2">
            Color mode switch
          </Heading>
          <ColorModeSwitch />
        </VStack>
      </VStack>
    </Container>
  );
}

export default ComponentTestBlock;
