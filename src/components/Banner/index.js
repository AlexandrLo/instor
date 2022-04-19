import React from "react";

import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Image, Link } from "@chakra-ui/react";

import BannerOverlay from "components/BannerOverlay";

function Banner({ data, ...props }) {
  return (
    <Link
      as={NavLink}
      to={data.to}
      w="100%"
      display="block"
      position="relative"
      {...props}
    >
      <Image
        src={data.image}
        alt="Banner image"
        h={{ base: "120px", md: "250px" }}
        w="100%"
        fit="cover"
        borderRadius="1rem"
      />
      <BannerOverlay heading={data.heading} lead={data.lead} />
    </Link>
  );
}

Banner.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    lead: PropTypes.string,
    to: PropTypes.string,
  }),
};

export default Banner;
