import React from "react";

import { Link } from "react-router-dom";
import { Button, HStack } from "@chakra-ui/react";

const suggestions = [
  { name: "Sofa", to: "/search?query=Sofa" },
  { name: "Chair", to: "/search?query=Chair" },
  { name: "Table", to: "/search?query=Table" },
];

function Suggestions() {
  return (
    <HStack>
      {suggestions.map((suggestion) => (
        <Button
          key={suggestion.name}
          as={Link}
          to={suggestion.to}
          size="sm"
          px="1rem"
          borderRadius="full"
        >
          {suggestion.name}
        </Button>
      ))}
    </HStack>
  );
}

export default Suggestions;
