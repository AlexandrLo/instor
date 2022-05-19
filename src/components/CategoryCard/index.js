import React from "react";

import PropTypes from "prop-types";

import ImageCard from "components/ImageCard";

function CategoryCard({ name, image, to }) {
  return (
    <ImageCard
      name={name}
      image={image}
      to={to}
      ratio={2 / 1}
      minW="150px"
      alt={`${name} category photo`}
      textProps={{
        top: "50%",
        transform: "auto",
        translateY: "-50%",
        color: "white",
      }}
    />
  );
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default CategoryCard;
