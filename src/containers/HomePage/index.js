import React from "react";

import Banner from "components/Banner";
import CategoriesBlock from "components/CategoriesBlock";
import Hero from "components/Hero";
import PopularBlock from "components/PopularBlock";
import RoomsBlock from "components/RoomsBlock";
import SlidingBanner from "components/SlidingBanner";

function HomePage() {
  return (
    <>
      <Hero />
      <SlidingBanner />
      <CategoriesBlock />
      <PopularBlock />
      <Banner />
      <RoomsBlock />
    </>
  );
}

export default HomePage;
