import React from "react";

import PropTypes from "prop-types";
import { Box, Button, HStack, Hide, useColorModeValue } from "@chakra-ui/react";
import {
  Cart24Filled,
  Home24Filled,
  PersonCircle24Filled,
  Search24Filled,
} from "@fluentui/react-icons";

import TabBarLink from "./TabBarLink";

const tabBarLinks = [
  {
    to: "/",
    icon: <Home24Filled />,
  },
  {
    to: "/search",
    icon: <Search24Filled />,
  },
  {
    to: "/cart",
    icon: <Cart24Filled />,
  },
];

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
          {tabBarLinks.map((link, i) => (
            <TabBarLink key={i} to={link.to}>
              {link.icon}
            </TabBarLink>
          ))}
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
