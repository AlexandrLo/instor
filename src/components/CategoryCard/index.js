import React from "react";

import ImageCard from "components/ImageCard";

function CategoryCard(props) {
  return (
    <ImageCard
      minW="150px"
      h={["75px", "100px", "125px", "160px"]}
      textProps={{
        left: "0",
        top: "50%",
        transform: "auto",
        translateY: "-50%",
        pl: { base: "1rem", md: "1.5rem" },
      }}
      {...props}
    />
  );
}

export default CategoryCard;