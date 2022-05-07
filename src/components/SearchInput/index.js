import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import {
  ArrowRight24Filled,
  Dismiss16Filled,
  Search24Filled,
} from "@fluentui/react-icons";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";

function SearchInput() {
  const iconColor = useColorModeValue("blackAlpha.500", "whiteAlpha.500");
  const [query, setQuery] = useState("");

  const ref = useRef(null);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  const clearInput = () => {
    setQuery("");
    ref.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color={iconColor}>
          <Search24Filled />
        </InputLeftElement>
        <Input
          ref={ref}
          placeholder="What are you looking for?"
          value={query}
          pr={query && "5.25rem"}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onSubmit={handleSubmit}
        />

        {query && (
          <InputRightElement width="5.25rem" color={iconColor}>
            <HStack spacing="0.25rem">
              <Button
                size="sm"
                variant="ghost"
                colorScheme="orange"
                onClick={clearInput}
              >
                <Dismiss16Filled />
              </Button>
              <Button type="submit" size="sm">
                <ArrowRight24Filled />
              </Button>
            </HStack>
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
}

export default SearchInput;
