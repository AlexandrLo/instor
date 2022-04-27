import React from "react";

import HorizontalScroll from "components/HorizontalScroll";
import RoomCard from "components/RoomCard";
import SectionWrapper from "components/SectionWrapper";

const roomsData = [
  {
    name: "Living Room",
    image: "assets/rooms/room-livingroom.jpg",
    to: "/room/livingroom",
  },
  {
    name: "Bed Room",
    image: "assets/rooms/room-bedroom.jpg",
    to: "/room/bedroom",
  },
  {
    name: "Dining Room",
    image: "assets/rooms/room-diningroom.jpg",
    to: "/room/diningroom",
  },
  {
    name: "Office",
    image: "assets/rooms/room-office.jpg",
    to: "/room/office",
  },
];

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
            to={room.to}
            key={`room-card-${room.name.toLowerCase()}`}
          />
        ))}
      </HorizontalScroll>
    </SectionWrapper>
  );
}

export default Rooms;
