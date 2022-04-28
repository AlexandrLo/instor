import React from "react";

import PropTypes from "prop-types";

import ImageCard from "components/ImageCard";

function CategoryCard({ name, image, to, isDragging, ...props }) {
  return (
    <ImageCard
      minW="150px"
      h={["75px", "75px", "95px", "115px", "135px", "160px"]}
      textProps={{
        color: "white",
        top: "50%",
        transform: "auto",
        translateY: "-50%",
      }}
      name={name}
      image={image}
      to={to}
      isDragging={isDragging}
      {...props}
    />
  );
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isDragging: PropTypes.bool,
};

export default CategoryCard;
