import React from "react";

import { HStack } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import ImageCardComponent from "components/ImageCard";

export default {
  title: "Instor/Components/Image Card",
  component: ImageCardComponent,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <HStack maxW="17rem">
          <Story />
        </HStack>
      </MemoryRouter>
    ),
  ],
  args: {
    name: "Name",
    image: "assets/rooms/room-bedroom.jpg",
    to: "/",
  },
};

export const ImageCard = (args) => <ImageCardComponent {...args} />;
