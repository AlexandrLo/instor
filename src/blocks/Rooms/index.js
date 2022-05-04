import React from "react";

import DragScroll from "components/DragScroll";
import { HStack } from "@chakra-ui/react";
import RoomCard from "components/RoomCard";
import SectionWrapper from "components/SectionWrapper";
import roomsData from "assets/json/rooms.json";

function Rooms() {
  return (
    <SectionWrapper
      heading={{
        text: "Rooms",
        description: "Furniture for every corners in your home",
      }}
      contentProps={{ pl: "0", pr: "0" }}
    >
      <DragScroll>
        <HStack
          w="fit-content"
          spacing="1rem"
          px={{ base: "1rem", md: "1.5rem" }}
        >
          {roomsData.map((room) => (
            <RoomCard
              image={room.image}
              name={room.name}
              to={`room?id=${room.id}`}
              key={room.id}
            />
          ))}
        </HStack>
      </DragScroll>
    </SectionWrapper>
  );
}

export default Rooms;
