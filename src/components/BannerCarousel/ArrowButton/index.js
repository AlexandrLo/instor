import React from "react";

import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Arrow({ direction = "left", onClick }) {
  return (
    <Button
      position="absolute"
      {...(direction === "left" && { left: "0" })}
      {...(direction === "right" && { right: "0" })}
      top="50%"
      transform="auto"
      translateY="-50%"
      minW="0"
      h="auto"
      mx={{ base: "0.5rem", md: "1rem" }}
      px="0"
      fontSize="2rem"
      variant="blur"
      color="black"
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
