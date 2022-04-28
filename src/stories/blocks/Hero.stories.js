import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import HeroComponent from "blocks/Hero";

export default {
  title: "Instor/Blocks/Hero",
  component: HeroComponent,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Box pt="5rem">
          <Story />
        </Box>
      </MemoryRouter>
    ),
  ],
};

export const Hero = (args) => <HeroComponent {...args} />;
