import React from "react";

import { NavLink } from "react-router-dom";
import { Container, Image, Link } from "@chakra-ui/react";

import BannerOverlay from "components/BannerOverlay";
import bannersData from "assets/json/banners.json";

function Banner() {
  const bannerData = bannersData[1];
  return (
    <Container>
      <Link
        variant="box-inset"
        as={NavLink}
        to={bannerData.to}
        w="100%"
        display="block"
        position="relative"
        borderRadius="1rem"
      >
        <Image
          src={bannerData.image}
          alt="Banner image"
          h={{ base: "120px", md: "250px" }}
          w="100%"
          fit="cover"
          position="relative"
          zIndex={-1}
          borderRadius="1rem"
        />
        <BannerOverlay heading={bannerData.heading} text={bannerData.text} />
      </Link>
    </Container>
  );
}

export default Banner;
