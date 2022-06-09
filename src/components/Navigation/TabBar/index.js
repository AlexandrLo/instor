import React from "react";

import PropTypes from "prop-types";
import { Box, Button, HStack, Hide, useColorModeValue } from "@chakra-ui/react";
import {
  Cart,
  Home,
  PersonCircle,
  Search,
} from "@styled-icons/fluentui-system-filled";

import CartBadge from "components/CartBadge";
import TabBarLink from "./TabBarLink";

function TabBar({ onLoginModalOpen }) {
  const borderColor = useColorModeValue("blackAlpha.50", "whiteAlpha.50");
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Hide above="sm">
      <Box
        position="fixed"
        zIndex="2"
        w="100%"
        bottom="0"
        borderTop="1px"
        borderColor={borderColor}
        bg={bgColor}
      >
        <HStack
          justify="space-between"
          boxSize="100%"
          maxW="20rem"
          spacing="1rem"
          mx="auto"
          py="1rem"
          px="1rem"
        >
          <TabBarLink to="/">
            <Home size={24} />
          </TabBarLink>
          <TabBarLink to="/search">
            <Search size={24} />
          </TabBarLink>
          <TabBarLink to="/cart">
            <Cart size={24} />
            <CartBadge side="right" />
          </TabBarLink>
          <Button
            size="sm"
            variant="ghost"
            colorScheme="orange"
            onClick={onLoginModalOpen}
          >
            <PersonCircle size={24} />
          </Button>
        </HStack>
      </Box>
    </Hide>
  );
}

TabBar.propTypes = {
  onLoginModalOpen: PropTypes.func.isRequired,
};

export default TabBar;
