import React from "react";

import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { AspectRatio, Image, Link, Text } from "@chakra-ui/react";

import ImageFallback from "components/ImageFallback";

function ImageCard({ name, image, to, ratio, minW, alt, textProps }) {
  return (
    <Link
      as={RouterLink}
      to={to}
      position="relative"
      pr={{ base: "1rem", md: "1.5rem" }}
      w="100%"
      borderRadius="1rem"
      variant="box"
      onDragStart={(e) => {
        // Prevent user client link dragging
        e.preventDefault();
      }}
    >
      <AspectRatio w="100%" ratio={ratio} minW={minW}>
        <Image
          src={image}
          alt={alt}
          fit="cover"
          borderRadius="1rem"
          fallback={<ImageFallback />}
        />
      </AspectRatio>
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
  ratio: PropTypes.number.isRequired,
  alt: PropTypes.string,
  minW: PropTypes.string,
  textProps: PropTypes.object,
  imageProps: PropTypes.object,
};

export default ImageCard;
