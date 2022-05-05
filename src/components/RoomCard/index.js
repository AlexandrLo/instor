import React from "react";

import PropTypes from "prop-types";

import ImageCard from "components/ImageCard";

function RoomCard({ name, image, to }) {
  return (
    <ImageCard
      name={name}
      image={image}
      to={to}
      imageProps={{
        minW: "180px",
        minH: "245px",
      }}
      textProps={{
        color: "black",
        maxW: "3.75rem",
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
