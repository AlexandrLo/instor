import React, { useCallback } from "react";

import { Add24Filled } from "@fluentui/react-icons";
import PropTypes from "prop-types";
import { Button, Tooltip } from "@chakra-ui/react";

function AddToCartButton({ size = "md" }) {
  const onAdd = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

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
};
export default AddToCartButton;
