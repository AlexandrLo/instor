import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import TabBarComponent from "blocks/TabBar";

export default {
  title: "Instor/Blocks/Tab Bar",
  component: TabBarComponent,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Box pt="5rem">
          <Story />
        </Box>
      </MemoryRouter>
    ),
  ],
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};

export const TabBar = (args) => <TabBarComponent {...args} />;
