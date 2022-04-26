import React from "react";

import {
  Box,
  Button,
  HStack,
  Hide,
  Image,
  Link,
  Show,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { AddFilled } from "@fluentui/react-icons";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function ProductCard({ productData, ...props }) {
  const cardBg = useColorModeValue("gray.50", "gray.700");
  return (
    <Link
      as={NavLink}
      to="/"
      borderRadius="1rem"
      bg={cardBg}
      variant="box"
      w="100%"
      {...props}
    >
      <Box position="relative">
        <Image
          src={productData.image}
          borderRadius="1rem"
          fit="cover"
          maxH="270px"
          w="100%"
        />

        <Hide above="sm">
          <Box
            bg={cardBg}
            position="absolute"
            bottom="0"
            right="0"
            margin="0.5rem"
            borderRadius="0.5rem"
          >
            <Button variant="brand" fontSize="24px">
              <AddFilled />
            </Button>
          </Box>
        </Hide>
      </Box>
      <HStack
        alignItems={["end", "center"]}
        justifyContent="space-between"
        spacing="0.5rem"
        p={["1rem", "1rem", "1.5rem"]}
      >
        <VStack alignItems="stretch" spacing="0" flexGrow="1" w="0%">
          <Text
            color="gray.400"
            fontSize="12px"
            fontWeight="600"
            textTransform="uppercase"
          >
            {productData.category}
          </Text>
          <Text
            textOverflow={"ellipsis"}
            overflow="hidden"
            style={{ wordWrap: "normal" }}
          >
            {productData.name}
          </Text>

          <Show above="xs">
            <Text fontWeight="600">${productData.price}</Text>
          </Show>
        </VStack>
        <Box flexGrow="0">
          <Show above="sm">
            <Button variant="brand" fontSize="24px">
              <AddFilled />
            </Button>
          </Show>
          <Hide above="xs">
            <Text fontWeight="600">${productData.price}</Text>
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
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default ProductCard;
