import React from "react";

import { Box, HStack, Hide, useColorModeValue } from "@chakra-ui/react";
import {
  CartFilled,
  HomeFilled,
  PersonCircleFilled,
} from "@fluentui/react-icons";

import MobileNavLink from "./MobileNavLink";

function MobileNav(props) {
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
        {...props}
      >
        <HStack
          w="100%"
          h="100%"
          spacing="1rem"
          justifyContent="space-between"
          maxW="15.5rem"
          mx="auto"
          py="1rem"
          px="1rem"
        >
          <MobileNavLink to="/">
            <HomeFilled fontSize="24px" />
          </MobileNavLink>
          <MobileNavLink to="/cart">
            <CartFilled fontSize="24px" />
          </MobileNavLink>
          <MobileNavLink to="/profile">
            <PersonCircleFilled fontSize="24px" />
          </MobileNavLink>
        </HStack>
      </Box>
    </Hide>
  );
}

export default MobileNav;
