import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import NavigationComponent from "blocks/Navigation";

export default {
  title: "Instor/Blocks/Navigation",
  component: NavigationComponent,
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

export const Navigation = (args) => <NavigationComponent {...args} />;
