import React from "react";

import { SearchFilled } from "@fluentui/react-icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";

function SearchInput() {
  const { colorMode } = useColorMode();

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        color={colorMode === "light" ? "gray.400" : "whiteAlpha.400"}
      >
        <SearchFilled fontSize="1.5rem" />
      </InputLeftElement>
      <Input variant="brand" placeholder="Search" />
    </InputGroup>
  );
}

export default SearchInput;
