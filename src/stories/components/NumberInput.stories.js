import React from "react";

import { Box } from "@chakra-ui/react";

import NumberInputComponent from "components/NumberInput";

export default {
  title: "Instor/Components/Number Input",
  component: NumberInputComponent,
  decorators: [
    (Story) => (
      <Box maxW="10rem">
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    size: {
      options: ["md", "sm"],
      control: { type: "select" },
    },
  },
  args: {
    size: "md",
  },
};

export const NumberInput = (args) => <NumberInputComponent {...args} />;
