import React from "react";

import { Box, HStack, Hide, useColorModeValue } from "@chakra-ui/react";
import {
  CartFilled,
  HomeFilled,
  PersonCircleFilled,
  SearchFilled,
} from "@fluentui/react-icons";

import TabBarLink from "./TabBarLink";

function TabBar() {
  const borderColor = useColorModeValue("blackAlpha.50", "whiteAlpha.50");
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Hide above="sm">
      <Box
        borderTop="1px"
        borderColor={borderColor}
        bg={bgColor}
        w="100%"
        position="fixed"
        bottom="0"
      >
        <HStack
          w="100%"
          h="100%"
          spacing="1rem"
          justifyContent="space-between"
          maxW="20rem"
          mx="auto"
          py="1rem"
          px="1rem"
        >
          <TabBarLink to="/">
            <HomeFilled fontSize="1.5rem" />
          </TabBarLink>
          <TabBarLink to="/search">
            <SearchFilled fontSize="1.5rem" />
          </TabBarLink>
          <TabBarLink to="/cart">
            <CartFilled fontSize="1.5rem" />
          </TabBarLink>
          <TabBarLink to="/profile">
            <PersonCircleFilled fontSize="1.5rem" />
          </TabBarLink>
        </HStack>
      </Box>
    </Hide>
  );
}

export default TabBar;
