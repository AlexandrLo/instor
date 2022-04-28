import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import SlidingBannerComponent from "blocks/SlidingBanner";

export default {
  title: "Instor/Blocks/Sliding Banner",
  component: SlidingBannerComponent,
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

export const SlidingBanner = (args) => <SlidingBannerComponent {...args} />;
