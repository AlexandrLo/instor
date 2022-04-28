import React, { useState } from "react";

import { ArrowRightFilled, SearchFilled } from "@fluentui/react-icons";
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
        <SearchFilled fontSize="1.5rem" />
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
            <ArrowRightFilled fontSize="1.5rem" />
          </Button>
        </InputRightElement>
      )}
    </InputGroup>
  );
}

export default SearchInput;
