import React from "react";

import Banner from "blocks/Banner";
import Categories from "blocks/Categories";
import Hero from "blocks/Hero";
import Popular from "blocks/Popular";
import Rooms from "blocks/Rooms";
import SlidingBanner from "blocks/SlidingBanner";

function HomePage() {
  return (
    <>
      <Hero />
      <SlidingBanner />
      <Categories />
      <Popular />
      <Banner />
      <Rooms />
    </>
  );
}

export default HomePage;
