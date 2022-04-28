import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import PopularComponent from "blocks/Popular";

export default {
  title: "Instor/Blocks/Popular",
  component: PopularComponent,
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

export const Popular = (args) => <PopularComponent {...args} />;
