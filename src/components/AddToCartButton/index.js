import React from "react";

import { Add } from "@styled-icons/fluentui-system-filled";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button, Tooltip, useToast } from "@chakra-ui/react";

import { cartAddItem } from "store/slices/cartSlice";

function AddToCartButton({ size = "md", id, name }) {
  const dispatch = useDispatch();

  const toast = useToast();

  const onAdd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (id) {
      dispatch(cartAddItem(id));
      toast({
        position: "top",
        title: "Added to cart",
        description: `${
          name[0].toUpperCase() + name.slice(1)
        } was added to your cart`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      {size === "md" && (
        <Button
          leftIcon={<Add size={24} />}
          colorScheme="orange"
          onClick={onAdd}
        >
          Add to cart
        </Button>
      )}
      {size === "sm" && (
        <Tooltip label="Add to cart" fontSize="md">
          <Button colorScheme="orange" onClick={onAdd}>
            <Add size={24} />
          </Button>
        </Tooltip>
      )}
    </>
  );
}
AddToCartButton.propTypes = {
  size: PropTypes.oneOf(["md", "sm"]),
  id: PropTypes.number,
  name: PropTypes.string,
};
export default AddToCartButton;
