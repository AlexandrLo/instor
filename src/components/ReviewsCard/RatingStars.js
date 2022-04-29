import React from "react";

import PropTypes from "prop-types";
import { StarFilled } from "@fluentui/react-icons";
import { Box, HStack } from "@chakra-ui/react";

function RatingStars({ rating }) {
  return (
    <HStack spacing="0">
      {Array(5)
        .fill()
        .map((_, i) => (
          <Box key={i} color={i + 1 < rating ? "yellow.400" : "gray.500"}>
            <StarFilled fontSize="1.5rem" />
          </Box>
        ))}
    </HStack>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingStars;
