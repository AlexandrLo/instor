import React from "react";

import PropTypes from "prop-types";
import { Box, Button, HStack, Hide, useColorModeValue } from "@chakra-ui/react";
import {
  Cart24Filled,
  Home24Filled,
  PersonCircle24Filled,
  Search24Filled,
} from "@fluentui/react-icons";

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
            <Home24Filled />
          </TabBarLink>
          <TabBarLink to="/search">
            <Search24Filled />
          </TabBarLink>
          <TabBarLink to="/cart">
            <Cart24Filled />
            <CartBadge side="right" />
          </TabBarLink>
          <Button
            size="sm"
            variant="ghost"
            colorScheme="orange"
            onClick={onLoginModalOpen}
          >
            <PersonCircle24Filled />
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
