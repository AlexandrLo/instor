import React, { useEffect, useState } from "react";

import { Container, Stack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import Title from "components/Title";
import productsData from "assets/json/products.json";

function ProductBlock() {
  let urlParams = useParams();
  let navigate = useNavigate();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const foundProduct = productsData.find(
      (product) => product.id == urlParams.id,
    );
    if (!foundProduct) {
      navigate("/404", { replace: true });
    } else {
      setProductData(foundProduct);
    }
  }, [urlParams]);

  return (
    <>
      <Title postfix={productData.name} />

      <Container py={{ base: "1rem", md: "1.5rem" }}>
        <Stack direction={{ base: "column", md: "row" }} spacing="0">
          <ProductImage name={productData.name} images={productData.images} />
          <ProductInfo product={productData} />
        </Stack>
      </Container>
    </>
  );
}

export default ProductBlock;
