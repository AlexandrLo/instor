import React from "react";

import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Arrow({ direction = "left", onClick }) {
  return (
    <Button
      top="50%"
      transform="auto"
      translateY="-50%"
      mx={{ base: "0.5rem", md: "1rem" }}
      px="0"
      minW="0"
      h="auto"
      position="absolute"
      variant="blur"
      color="black"
      fontSize="2rem"
      {...(direction === "left" && { left: "0" })}
      {...(direction === "right" && { right: "0" })}
      onClick={onClick}
    >
      {direction === "left" && <ChevronLeftIcon />}
      {direction === "right" && <ChevronRightIcon />}
    </Button>
  );
}

Arrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
};

export default Arrow;
