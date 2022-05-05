import React from "react";

import { Cart24Filled } from "@fluentui/react-icons";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  HStack,
  Hide,
  Link,
  Show,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import LogoDark from "assets/images/logo-dark.svg";
import LogoLight from "assets/images/logo-light.svg";
import SearchInput from "components/SearchInput";

function NavBar() {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("blackAlpha.50", "whiteAlpha.50");

  return (
    <Box
      position={{ base: "inherit", sm: "sticky" }}
      top="0"
      bg={bgColor}
      zIndex="2"
      borderBottom="1px"
      borderColor={{ base: "transparent", sm: borderColor }}
    >
      <Container p={{ base: "1rem", md: "1.5rem" }}>
        {/* Main Row */}
        <HStack spacing="2rem" justify="space-between">
          <Box>
            <Link as={RouterLink} to="/">
              {colorMode === "light" ? <LogoDark /> : <LogoLight />}
            </Link>
          </Box>
          <Hide below="md">
            <Box w="100%">
              <SearchInput />
            </Box>
          </Hide>
          <Show above="sm">
            <HStack spacing="0.5rem" justify="end">
              <Button
                leftIcon={<Cart24Filled />}
                variant="alpha"
                colorScheme="orange"
                as={RouterLink}
                to="/cart"
              >
                Cart
              </Button>
              <Button variant="solid">Log In/Sign Up</Button>
            </HStack>
          </Show>
        </HStack>
        {/* Search row */}
        <Show below="md">
          <Show above="sm">
            <Box pt="1rem">
              <SearchInput />
            </Box>
          </Show>
        </Show>
      </Container>
    </Box>
  );
}

export default NavBar;
