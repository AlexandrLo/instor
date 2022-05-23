import React from "react";

import { Flex } from "@chakra-ui/react";

import DragScroll from "components/DragScroll";
import RoomCard from "./RoomCard";
import SectionWrapper from "components/SectionWrapper";
import roomsData from "assets/json/rooms.json";

function RoomsSection() {
  return (
    <SectionWrapper
      heading={{
        text: "Rooms",
        description: "Furniture for every corners in your home",
      }}
    >
      <DragScroll>
        <Flex
          w="100%"
          px={{ base: "1rem", md: "1.5rem" }}
          pb={{ base: "1rem", md: "1.5rem" }}
        >
          {roomsData.map((room) => (
            <RoomCard
              image={room.image}
              name={room.name}
              to={`/room/${room.id}`}
              key={room.id}
            />
          ))}
        </Flex>
      </DragScroll>
    </SectionWrapper>
  );
}

export default RoomsSection;
