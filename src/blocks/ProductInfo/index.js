import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import DragScroll from "components/DragScroll";
import Price from "components/Price";
import { Add24Filled, ShareAndroid24Filled } from "@fluentui/react-icons";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";

import BackButton from "components/BackButton";
import ReviewsCard from "components/ReviewsCard";
import TitleUpdater from "components/TitleUpdater";
import productsData from "assets/json/products.json";

function ProductInfo() {
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
    <Box>
      <TitleUpdater title={productData.name} />
      <Container py={{ base: "1rem", md: "1.5rem" }}>
        <Stack direction={{ base: "column", md: "row" }} spacing="0">
          {/* Image column */}
          <Box
            pos="relative"
            flex="1 1 50%"
            ml={{ base: "1rem", md: "1.5rem" }}
            mr={{ base: "1rem", md: "0" }}
          >
            <Image
              maxH={{ base: "28rem", md: "100%" }}
              w="100%"
              src={productData.images?.[0]}
              fit="cover"
              borderRadius="1rem"
            />
            <HStack
              pos="absolute"
              top="0"
              p="1.5rem"
              w="100%"
              justify="space-between"
            >
              <BackButton variant="blur" />
              <Button variant="blur">
                <ShareAndroid24Filled />
              </Button>
            </HStack>
          </Box>
          {/* Info column */}
          <VStack
            flex="1 0 50%"
            align="stretch"
            spacing={{ base: "1rem", md: "1.5rem" }}
            pt={{ base: "1rem", md: "1.5rem" }}
          >
            {/* Row 1 */}
            <HStack
              justify="space-between"
              w="100%"
              align="end"
              px={{ base: "1rem", md: "1.5rem" }}
            >
              <VStack align="start" spacing="0">
                <Text variant="bold" color="gray.400" textTransform="uppercase">
                  {productData.category?.name}
                </Text>
                <Heading as="h2" size="h2" textTransform="capitalize">
                  {productData.name}
                </Heading>
              </VStack>
              <Price
                size="lg"
                price={productData.price}
                discount={productData.discount}
              />
            </HStack>
            {/* Row 2 */}
            <Stack
              direction={{ base: "column-reverse", xl: "row" }}
              align={{ base: "stretch", xl: "center" }}
              justify="space-between"
              px={{ base: "1rem", md: "1.5rem" }}
              spacing={{ base: "1rem", md: "1.5rem" }}
            >
              <ReviewsCard />
              <Button leftIcon={<Add24Filled />} colorScheme="orange">
                Add to cart
              </Button>
            </Stack>
            {/* Row 3 */}
            <Tabs w="100%">
              <DragScroll>
                <TabList
                  w="fit-content"
                  spacing="1rem"
                  px={{ base: "1rem", md: "1.5rem" }}
                >
                  {productData.info?.map((info) => (
                    <Tab key={info[0]}>{info[0]}</Tab>
                  ))}
                </TabList>
              </DragScroll>
              <TabPanels>
                {productData.info?.map((info) => (
                  <TabPanel key={info[0]}>
                    <Text>{info[1]}</Text>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}

export default ProductInfo;