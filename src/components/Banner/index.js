import React, { useEffect, useState } from "react";

import { Link as RouterLink } from "react-router-dom";
import { Container, Link } from "@chakra-ui/react";

import BannerOverlay from "components/BannerOverlay";
import Image from "components/Image";
import bannersData from "assets/json/banners.json";

function Banner() {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData(bannersData[1]);
  }, []);

  return (
    <Container p={{ base: "1rem", md: "1.5rem" }}>
      <Link
        as={RouterLink}
        to={bannerData?.to ?? ""}
        display="block"
        position="relative"
        h={["8rem", "10rem", "12rem", "14rem", "16rem"]}
        w="100%"
        borderRadius="1rem"
        variant="box-inset"
      >
        <Image src={bannerData?.image} alt="Banner photo" />
        <BannerOverlay heading={bannerData?.heading} text={bannerData?.text} />
      </Link>
    </Container>
  );
}

export default Banner;
