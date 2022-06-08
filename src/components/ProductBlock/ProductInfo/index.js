import React from "react";

import PropTypes from "prop-types";
import {
  Box,
  HStack,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";

import AddToCartButton from "components/AddToCartButton";
import DragScroll from "components/DragScroll";
import Price from "components/Price";
import ReviewsCard from "./ReviewsCard";

function ProductInfo({ product }) {
  const padding = { base: "1rem", md: "1.5rem" };
  return (
    <VStack align="stretch" spacing={padding} pt={padding}>
      {/* Row 1 */}
      <HStack justify="space-between" align="flex-end" px={padding}>
        <Box>
          <Text variant="bold" color="gray.400" textTransform="uppercase">
            {product.category?.name}
          </Text>
          <Heading as="h2" size="h2" textTransform="capitalize">
            {product.name}
          </Heading>
        </Box>
        <Price size="lg" price={product.price} discount={product.discount} />
      </HStack>
      {/* Row 2 */}
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        align={{ base: "stretch", lg: "center" }}
        justify="space-between"
        px={padding}
        spacing={padding}
      >
        <ReviewsCard />
        <AddToCartButton id={product.id} name={product.name} />
      </Stack>
      {/* Row 3 */}
      <Tabs>
        <DragScroll>
          <TabList w="fit-content" spacing="1rem" px={padding}>
            {product.info?.map((info) => (
              <Tab key={info[0]}>{info[0]}</Tab>
            ))}
          </TabList>
        </DragScroll>
        <TabPanels>
          {product.info?.map((info) => (
            <TabPanel key={info[0]}>
              <Text>{info[1]}</Text>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    info: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    price: PropTypes.number,
    discount: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ProductInfo;
