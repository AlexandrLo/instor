import React from "react";

import HorizontalScroll from "components/HorizontalScroll";
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
      <HorizontalScroll>
        {roomsData.map((room) => (
          <RoomCard
            image={room.image}
            name={room.name}
            to={`room?id=${room.id}`}
            key={room.id}
          />
        ))}
      </HorizontalScroll>
    </SectionWrapper>
  );
}

export default Rooms;
