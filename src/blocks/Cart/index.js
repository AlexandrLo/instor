import React from "react";

import { Container, Stack, VStack } from "@chakra-ui/react";

import CartItem from "./CartItem";
import PageHeader from "components/PageHeader";
import Summary from "./Summary";
import productsData from "assets/json/products.json";

function Cart() {
  return (
    <Container p={{ base: "1rem", md: "1.5rem" }}>
      <VStack spacing={{ base: "2rem", md: "3rem" }}>
        <PageHeader heading="Shopping Cart" />
        <Stack
          w="100%"
          align="start"
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "1rem", md: "3rem" }}
        >
          <VStack w="100%" spacing="1rem">
            {productsData.slice(0, 3).map((product) => (
              <CartItem key={product.id} data={{ amount: 1, product }} />
            ))}
          </VStack>
          <Summary />
        </Stack>
      </VStack>
    </Container>
  );
}

export default Cart;
