import React from "react";

import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { AspectRatio, Heading, Link } from "@chakra-ui/react";

import Image from "components/Image";

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
        <Image src={image} alt={alt} />
      </AspectRatio>
      <Heading
        as="h3"
        size="h3"
        position="absolute"
        left={{ base: "1rem", md: "1.5rem" }}
        top={{ base: "1rem", md: "1.5rem" }}
        style={{ wordSpacing: "100vw" }}
        textTransform="capitalize"
        {...textProps}
      >
        {name}
      </Heading>
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
