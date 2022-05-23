import React from "react";

import PropTypes from "prop-types";
import { ShareAndroid24Filled } from "@fluentui/react-icons";
import { AspectRatio, Box, Button, HStack, Image } from "@chakra-ui/react";

import BackButton from "components/BackButton";
import ImageFallback from "components/ImageFallback";

function ProductImage({ images, name }) {
  return (
    <Box
      pos="relative"
      ml={{ base: "1rem", md: "1.5rem" }}
      mr={{ base: "1rem", md: "0" }}
    >
      <AspectRatio
        minW={{ base: "100%", md: "18rem", lg: "23rem", xl: "28rem" }}
        maxH={{ base: "none", sm: "28rem", md: "none" }}
        ratio={1}
      >
        <Image
          src={images?.[0]}
          alt={`Photo of ${name}`}
          fit="cover"
          borderRadius="1rem"
          fallback={<ImageFallback />}
        />
      </AspectRatio>
      <HStack
        pos="absolute"
        top="0"
        p="1.5rem"
        w="100%"
        justify="space-between"
      >
        <BackButton variant="blur" />
        <Button variant="blur">
          <ShareAndroid24Filled />
        </Button>
      </HStack>
    </Box>
  );
}

ProductImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
};

export default ProductImage;
