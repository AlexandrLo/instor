import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import BannerOverlayComponent from "components/BannerOverlay";

export default {
  title: "Instor/Components/Banner Overlay",
  component: BannerOverlayComponent,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Box position="relative" h="15rem" maxW="30rem">
          <Story />
        </Box>
      </MemoryRouter>
    ),
  ],
  args: {
    heading: "Heading",
    text: "Example text for banner overlay",
    showCTA: true,
  },
};

export const BannerOverlay = (args) => <BannerOverlayComponent {...args} />;
