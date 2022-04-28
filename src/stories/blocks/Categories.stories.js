import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import CategoriesComponent from "blocks/Categories";

export default {
  title: "Instor/Blocks/Categories",
  component: CategoriesComponent,
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

export const Categories = (args) => <CategoriesComponent {...args} />;
