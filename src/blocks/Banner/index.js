import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Container, Image, Link } from "@chakra-ui/react";

import BannerOverlay from "components/BannerOverlay";
import bannersData from "assets/json/banners.json";

function Banner() {
  const bannerData = bannersData[1];
  return (
    <Container p={{ base: "1rem", md: "1.5rem" }}>
      <Link
        as={RouterLink}
        to={bannerData.to}
        display="block"
        position="relative"
        w="100%"
        borderRadius="1rem"
        variant="box-inset"
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
