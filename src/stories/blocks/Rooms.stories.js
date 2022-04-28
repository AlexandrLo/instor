import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import RoomsComponent from "blocks/Rooms";

export default {
  title: "Instor/Blocks/Rooms",
  component: RoomsComponent,
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

export const Rooms = (args) => <RoomsComponent {...args} />;
