import React from "react";

import PropTypes from "prop-types";
import {
  AspectRatio,
  Box,
  HStack,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import AmountInput from "./AmountInput";
import DeleteButton from "./DeleteButton";
import Image from "components/Image";
import Price from "components/Price";

function CartItem({ item }) {
  const numberInputSize = useBreakpointValue({ base: "sm", lg: "md" });

  return (
    <HStack spacing={{ base: "0.5rem", md: "1rem" }} align="center">
      <AspectRatio ratio={1} flex="0 0 auto" w="30%" minW="7rem">
        <Image
          src={item.product.images}
          alt={`Photo of ${item.product.name}`}
        />
      </AspectRatio>

      <VStack
        w="100%"
        alignSelf="stretch"
        align="stretch"
        justify="space-between"
        py={{ base: "0.5rem", md: "1rem" }}
      >
        <HStack align="start" justify="space-between">
          <Box>
            <Text
              variant="small"
              fontWeight="600"
              color="gray.400"
              textTransform="uppercase"
            >
              {item.product.category.name}
            </Text>
            <Text textTransform="capitalize">{item.product.name}</Text>
          </Box>
          <DeleteButton id={item.id} />
        </HStack>

        <Stack direction={["column-reverse", "row"]} justify="space-between">
          <AmountInput size={numberInputSize} id={item.id} />
          <Price price={item.product.price} discount={item.product.discount} />
        </Stack>
      </VStack>
    </HStack>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
      price: PropTypes.number.isRequired,
      discount: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }),
};

export default CartItem;
