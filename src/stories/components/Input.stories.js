import React from "react";

import { Box, Input as InputComponent } from "@chakra-ui/react";

export default {
  title: "Instor/Components/Input",
  component: InputComponent,
  decorators: [
    (Story) => (
      <Box maxW="20rem">
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    size: {
      options: ["md", "sm"],
      control: { type: "select" },
    },
    colorScheme: {
      options: [
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "youtube",
        "instagram",
        "pinterest",
      ],
      control: { type: "select" },
    },
  },
  args: {
    placeholder: "Search",
    size: "md",
  },
};

export const Input = (args) => <InputComponent {...args} />;
