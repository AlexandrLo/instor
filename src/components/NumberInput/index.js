import React from "react";

import PropTypes from "prop-types";
import { Add24Filled, Subtract24Filled } from "@fluentui/react-icons";
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

function NumberInput({ size }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 0,
      max: 99,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack spacing={{ base: "0.25rem", md: "0.5rem" }}>
      <Button
        variant="alpha"
        colorScheme="gray"
        size={size ? size : "md"}
        {...dec}
      >
        <Subtract24Filled />
      </Button>
      <Input
        type="number"
        size={size ? size : "md"}
        textAlign="center"
        px="0"
        {...input}
      />
      <Button
        variant="alpha"
        colorScheme="gray"
        size={size ? size : "md"}
        {...inc}
      >
        <Add24Filled />
      </Button>
    </HStack>
  );
}

NumberInput.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default NumberInput;
