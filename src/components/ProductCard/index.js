import React from "react";

import PropTypes from "prop-types";
import {
  AspectRatio,
  Box,
  HStack,
  Hide,
  Image,
  Link,
  Show,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Link as RouterLink,
  useLocation,
  useSearchParams,
} from "react-router-dom";

import AddToCartButton from "components/AddToCartButton";
import ImageFallback from "components/ImageFallback";
import Price from "components/Price";

function ProductCard({ productData }) {
  const cardBg = useColorModeValue("gray.50", "gray.700");

  let location = useLocation();
  let [searchParams] = useSearchParams();
  const from = searchParams.get("from") ?? location.pathname;

  return (
    <Link
      as={RouterLink}
      to={`/product/${productData.id}?from=${from}`}
      w="100%"
      borderRadius="1rem"
      bg={cardBg}
      variant="box"
      onDragStart={(e) => {
        // Prevent user client link dragging
        e.preventDefault();
      }}
    >
      <Box position="relative">
        <AspectRatio maxW="100%" maxH="17rem" ratio={1}>
          <Image
            src={productData.images[0]}
            alt={`Photo of ${productData.name}`}
            fit="cover"
            borderRadius="1rem"
            fallback={<ImageFallback />}
          />
        </AspectRatio>

        <Hide above="sm">
          <Box
            bg={cardBg}
            position="absolute"
            bottom="0"
            right="0"
            margin="0.5rem"
            borderRadius="0.5rem"
          >
            <AddToCartButton size="sm" id={productData.id} />
          </Box>
        </Hide>
      </Box>
      <HStack
        align={["end", "center"]}
        justify="space-between"
        spacing="0.5rem"
        p={["1rem", "1rem", "1.5rem"]}
      >
        <VStack align="stretch" spacing="0" flexGrow="1" w="0%">
          <Text
            color="gray.400"
            fontSize="12px"
            fontWeight="600"
            textTransform="uppercase"
          >
            {productData.category.name}
          </Text>
          <Text
            textTransform="capitalize"
            textOverflow="ellipsis"
            overflow="hidden"
            style={{ wordWrap: "normal" }}
          >
            {productData.name}
          </Text>

          <Show above="xs">
            <Price price={productData.price} discount={productData.discount} />
          </Show>
        </VStack>
        <Box flexGrow="0">
          <Show above="sm">
            <AddToCartButton size="sm" id={productData.id} />
          </Show>
          <Hide above="xs">
            <Price price={productData.price} discount={productData.discount} />
          </Hide>
        </Box>
      </HStack>
    </Link>
  );
}

ProductCard.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    info: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default ProductCard;
