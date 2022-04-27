import React from "react";

import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

import ArrowLeft from "assets/arrow-left.svg";
import ArrowRight from "assets/arrow-right.svg";

function Arrow({ direction = "left", ...props }) {
  return (
    <Button
      top="50%"
      transform="auto"
      translateY="-50%"
      mx={{ base: "0.5rem", md: "1rem" }}
      size="sm"
      position="absolute"
      variant="ghost"
      colorScheme="blackAlpha"
      {...(direction === "left" && { left: "0" })}
      {...(direction === "right" && { right: "0" })}
      {...props}
    >
      {direction === "left" && <ArrowLeft />}
      {direction === "right" && <ArrowRight />}
    </Button>
  );
}

Arrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
};

export default Arrow;
