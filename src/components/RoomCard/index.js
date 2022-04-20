import React from "react";

import ImageCard from "components/ImageCard";

function RoomCard(props) {
  return (
    <ImageCard
      minW="180px"
      h={["245px", "260px", "275px", "290px", "300px"]}
      textProps={{
        left: "0",
        top: "0",
        m: "1.5rem",
        maxW: "3.75rem",
        color: "black",
      }}
      {...props}
    />
  );
}

export default RoomCard;
