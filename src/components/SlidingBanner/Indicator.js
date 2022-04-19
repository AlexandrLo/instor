import React from "react";

import PropTypes from "prop-types";
import { Button, HStack } from "@chakra-ui/react";

function Indicator({ length, current, navigate, ...props }) {
  return (
    <HStack
      justifyContent="center"
      pos="absolute"
      bottom={{ base: "0.5rem", md: "1rem" }}
      w="100%"
      {...props}
    >
      {Array(length)
        .fill()
        .map((_, index) => (
          <Button
            key={`dot-${index}`}
            boxSize="0.5rem"
            px="0"
            minW="0"
            variant="blur"
            onClick={() => navigate(index)}
            {...(current === index && { bg: "black" })}
          />
        ))}
    </HStack>
  );
}

Indicator.propTypes = {
  length: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Indicator;
