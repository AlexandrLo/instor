import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import BannerComponent from "blocks/Banner";

export default {
  title: "Instor/Blocks/Banner",
  component: BannerComponent,
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

export const Banner = (args) => <BannerComponent {...args} />;
