import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { Add, Subtract } from "@styled-icons/fluentui-system-filled";
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { cartSetItemAmount } from "store/slices/cartSlice";

function AmountInput({ size = "md", id }) {
  const dispatch = useDispatch();
  const amount = useSelector(
    (state) => state.cart.items.find((item) => item.id === id)?.amount,
  );

  const [value, setValue] = useState();

  useEffect(() => {
    setValue(amount);
  }, [amount]);

  useEffect(() => {
    if (!isNaN(value) && value !== "") {
      dispatch(cartSetItemAmount({ id, amount: parseInt(value) }));
    }
  }, [value]);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      value,
      defaultValue: 0,
      onChange: (valueAsString) => {
        setValue(valueAsString);
      },
      min: 0,
      max: 99,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack spacing={{ base: "0.25rem", md: "0.5rem" }}>
      <Button size={size} {...dec}>
        <Subtract size={24} />
      </Button>
      <Input
        type="number"
        size={size}
        textAlign="center"
        px="0"
        maxW={size === "sm" ? "2.5rem" : "4rem"}
        {...input}
      />
      <Button size={size} {...inc}>
        <Add size={24} />
      </Button>
    </HStack>
  );
}

AmountInput.propTypes = {
  size: PropTypes.oneOf(["md", "sm"]),
  id: PropTypes.number,
};

export default AmountInput;
