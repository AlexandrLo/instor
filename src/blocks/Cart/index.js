import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Container, Stack, VStack } from "@chakra-ui/react";

import CartList from "./CartList";
import PageHeader from "components/PageHeader";
import Summary from "./Summary";
import productsData from "assets/json/products.json";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const [hydratedCart, setHydratedCart] = useState([]);

  const getProductData = (id) =>
    productsData.find((product) => product.id === id);

  useEffect(() => {
    setHydratedCart(
      cartItems.map((item) => ({
        ...item,
        product: getProductData(item.id),
      })),
    );
  }, [cartItems]);

  return (
    <Container p={{ base: "1rem", md: "1.5rem" }}>
      <VStack spacing={{ base: "2rem", md: "3rem" }} align="stretch">
        <PageHeader heading="Shopping Cart" />
        <Stack
          align="start"
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "1rem", md: "3rem" }}
        >
          <CartList items={hydratedCart} />
          <Summary items={hydratedCart} />
        </Stack>
      </VStack>
    </Container>
  );
}

export default Cart;
