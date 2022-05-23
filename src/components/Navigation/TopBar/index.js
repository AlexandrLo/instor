import React from "react";

import { Cart24Filled } from "@fluentui/react-icons";
import PropTypes from "prop-types";
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
import { Link as RouterLink, useLocation } from "react-router-dom";

import CartBadge from "components/CartBadge";
import LogoDark from "assets/images/logo-dark.svg";
import LogoLight from "assets/images/logo-light.svg";
import SearchInput from "./SearchInput";

function TopBar({ onLoginModalOpen }) {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("blackAlpha.50", "whiteAlpha.50");
  let location = useLocation();

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
                <CartBadge />
              </Button>
              <Button variant="solid" onClick={onLoginModalOpen}>
                Log In/Sign Up
              </Button>
            </HStack>
          </Show>
        </HStack>
        {/* Search row */}
        {location.pathname === "/search" ? (
          <Show below="md">
            <Box pt="1rem">
              <SearchInput />
            </Box>
          </Show>
        ) : (
          <Show below="md">
            <Show above="sm">
              <Box pt="1rem">
                <SearchInput />
              </Box>
            </Show>
          </Show>
        )}
      </Container>
    </Box>
  );
}

TopBar.propTypes = {
  onLoginModalOpen: PropTypes.func.isRequired,
};

export default TopBar;
