import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import NavBarComponent from "blocks/NavBar";

export default {
  title: "Instor/Blocks/Nav Bar",
  component: NavBarComponent,
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

export const NavBar = (args) => <NavBarComponent {...args} />;
