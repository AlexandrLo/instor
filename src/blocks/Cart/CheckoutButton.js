import React from "react";

import PropTypes from "prop-types";
import { Button, useDisclosure } from "@chakra-ui/react";

import CheckoutModal from "./CheckoutModal";
import { cartClear } from "store/slices/cartSlice";
import { useDispatch } from "react-redux";

function CheckoutButton({ disabled = false }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cartClear());
    onOpen();
  };

  return (
    <>
      <Button colorScheme="orange" disabled={disabled} onClick={handleClick}>
        Checkout
      </Button>
      <CheckoutModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

CheckoutButton.propTypes = {
  disabled: PropTypes.bool,
};

export default CheckoutButton;
