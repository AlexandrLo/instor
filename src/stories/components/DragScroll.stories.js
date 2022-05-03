import React from "react";

import { Box, HStack, VStack } from "@chakra-ui/react";

import DragScrollComponent from "components/DragScroll";

export default {
  title: "Instor/Components/Drag Scroll",
  component: DragScrollComponent,
};

export const Horizontal = (args) => (
  <Box w="30rem">
    <DragScrollComponent {...args}>
      <HStack w="fit-content">
        {Array(5)
          .fill()
          .map((_, index) => (
            <Box key={index} boxSize="20rem" bg="orange.400" />
          ))}
      </HStack>
    </DragScrollComponent>
  </Box>
);
Horizontal.args = {
  axis: "x",
};

export const Vertical = (args) => (
  <Box h="30rem">
    <DragScrollComponent {...args}>
      <VStack h="fit-content">
        {Array(5)
          .fill()
          .map((_, index) => (
            <Box key={index} boxSize="20rem" bg="orange.400" />
          ))}
      </VStack>
    </DragScrollComponent>
  </Box>
);
Vertical.args = {
  axis: "y",
};
