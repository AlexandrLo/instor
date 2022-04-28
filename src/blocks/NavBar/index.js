import React from "react";

import { CartFilled } from "@fluentui/react-icons";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  HStack,
  Hide,
  Link,
  Show,
  useColorMode,
} from "@chakra-ui/react";

import LogoDark from "assets/logo-dark.svg";
import LogoLight from "assets/logo-light.svg";
import SearchInput from "components/SearchInput";

function NavBar() {
  const { colorMode } = useColorMode();

  return (
    <Container>
      <HStack spacing="2rem" justifyContent="space-between">
        <Box>
          <Link as={NavLink} to="/">
            {colorMode === "light" ? <LogoDark /> : <LogoLight />}
          </Link>
        </Box>
        <Hide below="md">
          <Box w="100%">
            <SearchInput />
          </Box>
        </Hide>

        <Show above="sm">
          <HStack spacing="0.5rem" justifyContent="end">
            <Button
              leftIcon={<CartFilled fontSize="1.5rem" />}
              variant="alpha"
              colorScheme="orange"
              as={NavLink}
              to="/cart"
            >
              Cart
            </Button>
            <Button variant="solid">Log In/Sign Up</Button>
          </HStack>
        </Show>
      </HStack>

      <Show below="md">
        <Show above="sm">
          <Box pt="2rem">
            <SearchInput />
          </Box>
        </Show>
      </Show>
    </Container>
  );
}

export default NavBar;
