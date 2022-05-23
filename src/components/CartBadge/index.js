import React from "react";

import { Badge } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function CartBadge({ side = "left" }) {
  const cartCount = useSelector((state) => state.cart.items.length);
  return (
    <>
      {cartCount > 0 && (
        <Badge
          variant="solid"
          colorScheme="orange"
          pos="absolute"
          top="0.25rem"
          {...(side === "left" && {
            left: "0.25rem",
            transform: "translate(-50%,-50%)",
          })}
          {...(side === "right" && {
            right: "0.25rem",
            transform: "translate(50%,-50%)",
          })}
        >
          {cartCount}
        </Badge>
      )}
    </>
  );
}

CartBadge.propTypes = {
  side: PropTypes.oneOf(["left", "right"]),
};

export default CartBadge;
