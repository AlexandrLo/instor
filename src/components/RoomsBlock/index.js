import React from "react";

import HeadingBlock from "components/HeadingBlock";
import RoomCard from "components/RoomCard";
import ScrollableBlock from "components/ScrollableBlock";

const rooms = [
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

function RoomsBlock() {
  return (
    <HeadingBlock
      heading={{
        text: "Rooms",
        description: "Furniture for every corners in your home",
      }}
      contentProps={{ pl: "0", pr: "0" }}
    >
      <ScrollableBlock>
        {rooms.map((room) => (
          <RoomCard
            image={room.image}
            name={room.name}
            to={room.to}
            key={`room-card-${room.name.toLowerCase()}`}
          />
        ))}
      </ScrollableBlock>
    </HeadingBlock>
  );
}

export default RoomsBlock;
