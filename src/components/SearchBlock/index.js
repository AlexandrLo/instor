import React, { useEffect, useState } from "react";

import Fuse from "fuse.js";
import { Search } from "@styled-icons/fluentui-system-filled";
import { useSearchParams } from "react-router-dom";
import { Container, VStack } from "@chakra-ui/react";

import PageHeader from "components/PageHeader";
import Placeholder from "components/Placeholder";
import ProductsGrid from "components/ProductsGrid";
import productsData from "assets/json/products.json";

function SearchBlock() {
  let [searchParams] = useSearchParams();
  const [fuse, setFuse] = useState();
  const [searchProductsData, setSeacrhProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    if (results) {
      setSeacrhProductsData(results?.map((result) => result.item));
      setIsLoading(false);
    }
  }, [searchParams, fuse]);

  return (
    <Container p={{ base: "1rem", md: "1.5rem" }} flex="1 0 100%">
      <VStack spacing={{ base: "2rem", md: "3rem" }}>
        <PageHeader
          heading="Search"
          description={query && `Showing results for "${query}"`}
        />
        {query ? (
          <ProductsGrid products={searchProductsData} isLoading={isLoading} />
        ) : (
          <Placeholder
            maxW="19rem"
            icon={<Search />}
            heading="Find Best Furniture For Your House"
            description="For example:"
            showButton={false}
            showSuggestions
          />
        )}
      </VStack>
    </Container>
  );
}

export default SearchBlock;
