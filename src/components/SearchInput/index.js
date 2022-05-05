import React, { useState } from "react";

import { ArrowRight24Filled, Search24Filled } from "@fluentui/react-icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";

function SearchInput() {
  const iconColor = useColorModeValue("blackAlpha.500", "whiteAlpha.500");
  const [query, setQuery] = useState("");

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" color={iconColor}>
        <Search24Filled />
      </InputLeftElement>
      <Input
        placeholder="What are you looking for?"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {query && (
        <InputRightElement color={iconColor}>
          <Button size="sm">
            <ArrowRight24Filled />
          </Button>
        </InputRightElement>
      )}
    </InputGroup>
  );
}

export default SearchInput;
