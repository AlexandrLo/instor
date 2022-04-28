import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import FooterComponent from "blocks/Footer";

export default {
  title: "Instor/Blocks/Footer",
  component: FooterComponent,
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

export const Footer = (args) => <FooterComponent {...args} />;
