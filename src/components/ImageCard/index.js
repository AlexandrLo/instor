import React from "react";

import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Image, Link, Text } from "@chakra-ui/react";

function ImageCard({ name, image, to, textProps, imageProps }) {
  return (
    <Link
      as={RouterLink}
      to={to}
      position="relative"
      w="100%"
      borderRadius="1rem"
      variant="box"
      onDragStart={(e) => {
        // Prevent user client link dragging
        e.preventDefault();
      }}
    >
      <Image
        src={image}
        alt="Card image"
        boxSize="100%"
        fit="cover"
        borderRadius="1rem"
        {...imageProps}
      />
      <Text
        position="absolute"
        left={{ base: "1rem", md: "1.5rem" }}
        top={{ base: "1rem", md: "1.5rem" }}
        fontWeight="600"
        textTransform="capitalize"
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
  textProps: PropTypes.object,
  imageProps: PropTypes.object,
};

export default ImageCard;
