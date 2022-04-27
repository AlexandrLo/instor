import React from "react";

import { Container, HStack, Hide, Show, Text, VStack } from "@chakra-ui/react";

import ColorModeSwitch from "components/ColorModeSwitch";
import SocialButtons from "./SocialButtons";

function Footer() {
  return (
    <Container pt="3rem" pb="3rem">
      <VStack spacing="2rem" pb={{ base: "4rem", sm: 0 }}>
        <Hide above="md">
          <HStack spacing="1.5rem">
            <SocialButtons />
          </HStack>
        </Hide>
        <HStack w="100%">
          <Show above="md">
            <HStack w="100%" spacing="1.5rem">
              <SocialButtons />
            </HStack>
          </Show>

          <Text variant="muted" textAlign="center" whiteSpace="nowrap">
            © Instor 2022
          </Text>

          <HStack w="100%" justifyContent="end">
            <ColorModeSwitch />
          </HStack>
        </HStack>
      </VStack>
    </Container>
  );
}

export default Footer;
