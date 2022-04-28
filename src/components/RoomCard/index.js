import React from "react";

import PropTypes from "prop-types";

import ImageCard from "components/ImageCard";

function RoomCard({ name, image, to, isDragging, ...props }) {
  return (
    <ImageCard
      minW="180px"
      h={["245px", "260px", "275px", "290px", "300px"]}
      textProps={{
        color: "black",
        maxW: "3.75rem",
      }}
      name={name}
      image={image}
      to={to}
      isDragging={isDragging}
      {...props}
    />
  );
}

RoomCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isDragging: PropTypes.bool,
};

export default RoomCard;
