import React from "react";

import { NavLink } from "react-router-dom";
import { Container, Image, Link } from "@chakra-ui/react";

import BannerOverlay from "components/BannerOverlay";

const bannerData = {
  image: "assets/banner/banner-2.jpg",
  heading: "Sale",
  lead: "All chairs up to 50% off",
  to: "/",
};

function Banner(props) {
  return (
    <Container maxW="container.xl">
      <Link
        variant="box"
        as={NavLink}
        to={bannerData.to}
        w="100%"
        display="block"
        position="relative"
        {...props}
      >
        <Image
          src={bannerData.image}
          alt="Banner image"
          h={{ base: "120px", md: "250px" }}
          w="100%"
          fit="cover"
          borderRadius="1rem"
        />
        <BannerOverlay heading={bannerData.heading} lead={bannerData.lead} />
      </Link>
    </Container>
  );
}

export default Banner;
