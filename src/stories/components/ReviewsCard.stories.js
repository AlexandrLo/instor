import React from "react";

import { HStack } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import ReviewsCardComponent from "components/ReviewsCard";

export default {
  title: "Instor/Components/Reviews Card",
  component: ReviewsCardComponent,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <HStack maxW="17rem">
          <Story />
        </HStack>
      </MemoryRouter>
    ),
  ],
};

export const ReviewsCard = (args) => <ReviewsCardComponent {...args} />;
