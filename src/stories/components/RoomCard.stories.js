import React from "react";

import { HStack } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";

import RoomCardComponent from "components/RoomCard";

export default {
  title: "Instor/Components/Room Card",
  component: RoomCardComponent,
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
    name: "Bed Room",
    image: "assets/rooms/room-bedroom.jpg",
    to: "/",
  },
};

export const RoomCard = (args) => <RoomCardComponent {...args} />;
