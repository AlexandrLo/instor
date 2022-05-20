import React from "react";

import { Add24Filled } from "@fluentui/react-icons";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button, Tooltip } from "@chakra-ui/react";

import { cartAddItem } from "store/slices/cartSlice";

function AddToCartButton({ size = "md", id }) {
  const dispatch = useDispatch();
  const onAdd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (id) dispatch(cartAddItem(id));
  };

  return (
    <>
      {size === "md" && (
        <Button leftIcon={<Add24Filled />} colorScheme="orange" onClick={onAdd}>
          Add to cart
        </Button>
      )}
      {size === "sm" && (
        <Tooltip label="Add to cart" fontSize="md">
          <Button colorScheme="orange" onClick={onAdd}>
            <Add24Filled />
          </Button>
        </Tooltip>
      )}
    </>
  );
}
AddToCartButton.propTypes = {
  size: PropTypes.oneOf(["md", "sm"]),
  id: PropTypes.number,
};
export default AddToCartButton;
