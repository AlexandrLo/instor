import React from "react";

import PropTypes from "prop-types";
import { AddFilled, SubtractFilled } from "@fluentui/react-icons";
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

function NumberInput({ size, ...props }) {
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
      <Button variant="brand" size={size ? size : "md"} {...dec}>
        <SubtractFilled fontSize="1.5rem" />
      </Button>
      <Input
        type="number"
        variant="brand"
        px="0"
        textAlign="center"
        size={size ? size : "md"}
        {...props}
        {...input}
      />
      <Button variant="brand" size={size ? size : "md"} {...inc}>
        <AddFilled fontSize="1.5rem" />
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
