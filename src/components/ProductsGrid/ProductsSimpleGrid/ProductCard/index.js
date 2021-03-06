import React from "react";

import PropTypes from "prop-types";
import {
  AspectRatio,
  Box,
  HStack,
  Hide,
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
import Image from "components/Image";
import Price from "components/Price";

function ProductCard({ product }) {
  const cardBg = useColorModeValue("gray.50", "gray.700");

  let location = useLocation();
  let [searchParams] = useSearchParams();
  const from = searchParams.get("from") ?? location.pathname;

  return (
    <Link
      as={RouterLink}
      to={`/product/${product.id}?from=${from}`}
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
          <Image src={product.images[0]} alt={`Photo of ${product.name}`} />
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
            <AddToCartButton size="sm" id={product.id} name={product.name} />
          </Box>
        </Hide>
      </Box>
      <HStack
        align={["flex-end", "center"]}
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
            {product.category.name}
          </Text>
          <Text
            textTransform="capitalize"
            textOverflow="ellipsis"
            overflow="hidden"
            style={{ wordWrap: "normal" }}
          >
            {product.name}
          </Text>

          <Show above="xs">
            <Price price={product.price} discount={product.discount} />
          </Show>
        </VStack>
        <Box flexGrow="0">
          <Show above="sm">
            <AddToCartButton size="sm" id={product.id} name={product.name} />
          </Show>
          <Hide above="xs">
            <Price price={product.price} discount={product.discount} />
          </Hide>
        </Box>
      </HStack>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
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
