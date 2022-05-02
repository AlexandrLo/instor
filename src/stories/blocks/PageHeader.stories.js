import React from "react";

import { Box } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import PageHeaderComponent from "blocks/PageHeader";

export default {
  title: "Instor/Blocks/Page Header",
  component: PageHeaderComponent,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Box pt="5rem">
          <Story />
        </Box>
      </MemoryRouter>
    ),
  ],
  args: {
    heading: "Heading",
  },
};

export const Basic = (args) => <PageHeaderComponent {...args} />;

export const WithDescription = (args) => <PageHeaderComponent {...args} />;
WithDescription.args = {
  description: "Example description of current page",
};

export const WithImage = (args) => <PageHeaderComponent {...args} />;
WithImage.args = {
  image: "assets/images/categories/category-chairs.jpg",
};
