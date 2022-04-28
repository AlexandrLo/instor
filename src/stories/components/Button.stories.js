import React from "react";

import { Button as ButtonComponent } from "@chakra-ui/react";

export default {
  title: "Instor/Components/Button",
  component: ButtonComponent,
  argTypes: {
    variant: {
      options: ["solid", "alpha", "blur", "ghost"],
      control: { type: "select" },
    },
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
    variant: "alpha",
    size: "md",
    children: "Button",
    colorScheme: "gray",
  },
};

export const Button = (args) => <ButtonComponent {...args} />;
