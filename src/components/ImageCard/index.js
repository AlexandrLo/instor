import React from "react";

import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Image, Link, Text } from "@chakra-ui/react";

function ImageCard({ name, image, to, textProps = {}, ...props }) {
  return (
    <Link
      variant="box"
      as={NavLink}
      to={to}
      position="relative"
      w="100%"
      borderRadius="1rem"
      onDragStart={(e) => {
        // Prevent user client link dragging
        e.preventDefault();
      }}
      {...props}
    >
      <Image
        boxSize="100%"
        src={image}
        alt="Card image"
        fit="cover"
        borderRadius="1rem"
      />
      <Text
        position="absolute"
        fontWeight="600"
        textTransform="capitalize"
        left={{ base: "1rem", md: "1.5rem" }}
        top={{ base: "1rem", md: "1.5rem" }}
        {...textProps}
      >
        {name}
      </Text>
    </Link>
  );
}

ImageCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isDragging: PropTypes.bool,
  textProps: PropTypes.object,
};

export default ImageCard;
