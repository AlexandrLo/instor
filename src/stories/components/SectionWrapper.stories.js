import React from "react";

import { MemoryRouter } from "react-router";

import SectionWrapperComponent from "components/SectionWrapper";
import { Box, HStack } from "@chakra-ui/react";

export default {
  title: "Instor/Components/Section Wrapper",
  component: SectionWrapperComponent,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Box pt="5rem">
          <Story />
        </Box>
      </MemoryRouter>
    ),
  ],
  args: {
    heading: {
      text: "Heading",
      description: "Example description",
      to: "/",
    },
  },
};

export const SectionWrapper = (args) => (
  <SectionWrapperComponent {...args}>
    <HStack w="100%" h="10rem" bg="gray.400" justify="center">
      <Box>Example children element</Box>
    </HStack>
  </SectionWrapperComponent>
);
