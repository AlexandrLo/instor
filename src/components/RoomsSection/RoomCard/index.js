import React from "react";

import PropTypes from "prop-types";

import ImageCard from "components/ImageCard";

function RoomCard({ name, image, to }) {
  return (
    <ImageCard
      name={name}
      image={image}
      to={to}
      ratio={2 / 3}
      minW="180px"
      alt={`${name} category photo`}
      textProps={{
        color: "black",
      }}
    />
  );
}

RoomCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default RoomCard;
