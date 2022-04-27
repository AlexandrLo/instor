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
      <HStack spacing="1rem">
        <Box w="100%">
          <Link as={NavLink} to="/">
            {colorMode === "light" ? <LogoDark /> : <LogoLight />}
          </Link>
        </Box>
        <Show above="lg">
          <Box minW="450px">
            <SearchInput />
          </Box>
        </Show>

        <Show above="sm">
          <HStack spacing="0.5rem" w="100%" justifyContent="end">
            <Button
              leftIcon={<CartFilled fontSize="1.5rem" />}
              variant="brand"
              as={NavLink}
              to="/cart"
            >
              Cart
            </Button>
            <Button variant="primary">Log In/Sign Up</Button>
          </HStack>
        </Show>
      </HStack>

      <Hide above="lg">
        <Box pt="2rem">
          <SearchInput />
        </Box>
      </Hide>
    </Container>
  );
}

export default NavBar;
