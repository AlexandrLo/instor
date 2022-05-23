import React, { useEffect, useState } from "react";

import Fuse from "fuse.js";
import { useSearchParams } from "react-router-dom";
import { Container, VStack } from "@chakra-ui/react";

import PageHeader from "components/PageHeader";
import Placeholder from "./Placeholder";
import ProductsGrid from "components/ProductsGrid";
import productsData from "assets/json/products.json";

function SearchBlock() {
  let [searchParams] = useSearchParams();
  const [searchProductsData, setSeacrhProductsData] = useState([]);
  const [fuse, setFuse] = useState();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    setFuse(
      new Fuse(productsData, {
        keys: ["name", "category.name", "rooms.name", "info"],
      }),
    );
  }, []);

  useEffect(() => {
    const results = fuse?.search(query);
    setSeacrhProductsData(results?.map((result) => result.item));
  }, [searchParams, fuse]);

  return (
    <Container p={{ base: "1rem", md: "1.5rem" }}>
      <VStack spacing={{ base: "2rem", md: "3rem" }}>
        <PageHeader
          heading="Search"
          description={query && `Showing results for "${query}"`}
        />
        {query ? <ProductsGrid data={searchProductsData} /> : <Placeholder />}
      </VStack>
    </Container>
  );
}

export default SearchBlock;
