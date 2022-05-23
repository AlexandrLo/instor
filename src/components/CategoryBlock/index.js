import React, { useEffect, useState } from "react";

import { Container, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import PageHeader from "components/PageHeader";
import ProductsGrid from "components/ProductsGrid";
import categoriesData from "assets/json/categories.json";
import productsData from "assets/json/products.json";

function CategoryBlock() {
  let urlParams = useParams();
  let navigate = useNavigate();
  const [categoryData, setCategoryData] = useState({});
  const [categoryProductsData, setCategoryProductsData] = useState([]);

  useEffect(() => {
    const foundCategory = categoriesData.find(
      (category) => category.id == urlParams.id,
    );
    if (!foundCategory) {
      navigate("/404", { replace: true });
    } else {
      setCategoryData(foundCategory);
      setCategoryProductsData(
        productsData.filter((product) => product.category.id == urlParams.id),
      );
    }
  }, [urlParams]);

  return (
    <Container p={{ base: "1rem", md: "1.5rem" }}>
      <VStack spacing={{ base: "2rem", md: "3rem" }}>
        <PageHeader heading={categoryData.name} image={categoryData.image} />
        <ProductsGrid data={categoryProductsData} />
      </VStack>
    </Container>
  );
}

export default CategoryBlock;
