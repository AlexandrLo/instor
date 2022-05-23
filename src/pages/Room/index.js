import React from "react";

import Banner from "components/Banner";
import RoomBlock from "components/RoomBlock";
import Title from "components/Title";

function Room() {
  return (
    <>
      <Title postfix="Room" />

      <RoomBlock />
      <Banner />
    </>
  );
}

export default Room;
