import React from "react";

import { Dismiss24Filled } from "@fluentui/react-icons";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import ImageFallback from "components/ImageFallback";
import NumberInput from "components/NumberInput";
import Price from "components/Price";

function CartItem({ data }) {
  const numberInputSize = useBreakpointValue({ base: "sm", lg: "md" });

  return (
    <HStack w="100%" spacing={{ base: "0.5rem", md: "1rem" }} align="center">
      <Box
        flex="1 0 auto"
        boxSize={["6rem", "7rem", "8rem", "9rem", "10rem", "11rem"]}
      >
        <Image
          src={data.product.images}
          alt={`Photo of ${data.product.name}`}
          borderRadius="1rem"
          fit="cover"
          fallback={<ImageFallback />}
        />
      </Box>
      <VStack
        alignSelf="stretch"
        w="100%"
        justify="space-between"
        py={{ base: "0.5rem", md: "1rem" }}
      >
        <HStack w="100%" align="start" justify="space-between">
          <VStack spacing="0" align="start">
            <Text textTransform="capitalize">{data.product.name}</Text>
            <Text variant="small" color="gray.400">
              Art: {data.product.id}
            </Text>
          </VStack>
          <Button size="sm">
            <Dismiss24Filled />
          </Button>
        </HStack>
        <HStack w="100%" justify="space-between">
          <NumberInput size={numberInputSize} />
          <Price price={data.product.price} discount={data.product.discount} />
        </HStack>
      </VStack>
    </HStack>
  );
}

CartItem.propTypes = {
  data: PropTypes.shape({
    amount: PropTypes.number,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discount: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }),
};

export default CartItem;
